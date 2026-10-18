import React, { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -18% 0px', threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const classes = ['scroll-reveal', visible && 'scroll-reveal--visible', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
