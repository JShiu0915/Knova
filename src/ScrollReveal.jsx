import React, { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  as: Tag = 'div',
  className = '',
  children,
  delay = 0,
  revealEarly = false,
  style,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return undefined
    }

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setVisible(true)
      return undefined
    }

    let active = true
    let isIntersecting = false
    let frameId = 0
    let observer

    const cleanup = () => {
      observer?.disconnect()
      window.removeEventListener('scroll', requestCheck)
      window.removeEventListener('resize', requestCheck)
      window.cancelAnimationFrame(frameId)
    }

    const reveal = () => {
      if (!active) {
        return
      }

      active = false
      cleanup()
      setVisible(true)
    }

    const checkVisibility = () => {
      frameId = 0

      if (!active || !isIntersecting) {
        return
      }

      const rect = el.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
      const entryAllowance = Math.min(40, rect.height * 0.2)
      const readyToReveal =
        rect.top >= headerHeight &&
        rect.left >= 0 &&
        rect.bottom <= viewportHeight + entryAllowance &&
        rect.right <= viewportWidth
      const earlyVisible =
        revealEarly &&
        rect.top <= viewportHeight * 0.92 &&
        rect.bottom >= headerHeight
      const exceedsViewport = rect.height > viewportHeight - headerHeight || rect.width > viewportWidth
      const fallbackVisible =
        exceedsViewport &&
        rect.top <= headerHeight + viewportHeight * 0.15 &&
        rect.bottom >= viewportHeight * 0.85

      if (readyToReveal || earlyVisible || fallbackVisible) {
        reveal()
      }
    }

    const requestCheck = () => {
      if (!active || !isIntersecting || frameId) {
        return
      }

      frameId = window.requestAnimationFrame(checkVisibility)
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting

        if (isIntersecting) {
          requestCheck()
        }
      },
      { root: null, threshold: 0 },
    )

    observer.observe(el)
    window.addEventListener('scroll', requestCheck, { passive: true })
    window.addEventListener('resize', requestCheck)

    return () => {
      active = false
      cleanup()
    }
  }, [])

  const classes = ['scroll-reveal', visible && 'scroll-reveal--visible', className]
    .filter(Boolean)
    .join(' ')
  const revealStyle = delay
    ? { ...style, '--scroll-reveal-delay': `${delay}ms` }
    : style

  return (
    <Tag ref={ref} className={classes} style={revealStyle} {...rest}>
      {children}
    </Tag>
  )
}
