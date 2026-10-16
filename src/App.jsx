import React, { useEffect, useState } from 'react'

const productCards = [
  {
    index: '01',
    name: 'SkillNavigator',
    category: 'Skill 管理平台',
    title: '把专家经验，变成每个人都能调用的能力。',
    description:
      '将 SOP、业务规则与最佳实践封装为可复用的 AI Skill，让组织能力不再随人流失。',
    features: ['Skill 资产化', '业务流程编排', '全生命周期治理'],
    type: 'skill',
    route: '/products/skillnavigator',
  },
  {
    index: '02',
    name: 'Knode',
    category: '本地知识管理平台',
    title: '让企业的每一份知识，都有被用好的机会。',
    description:
      '连接分散的文档、制度与业务资料，在本地建立可信、可检索、可追溯的知识底座。',
    features: ['多格式知识接入', '引用可追溯', '权限体系继承'],
    type: 'knode',
    route: '/products/knode',
  },
]

const productDetails = {
  skill: {
    headline: '让组织里的最佳经验，',
    highlight: '被每个人调用。',
    intro:
      'SkillNavigator 将个人与团队的工作方法沉淀为可复用、可治理的 AI Skill，帮助企业把一次次有效实践，转化为长期的组织能力。',
    capabilities: [
      {
        number: '01',
        title: '把经验封装为 Skill',
        text: '将 SOP、提示词、业务规则和工具连接器组合为标准化的智能能力。',
      },
      {
        number: '02',
        title: '按业务场景灵活编排',
        text: '围绕岗位、任务与流程配置调用逻辑，让 Skill 真正服务于日常工作。',
      },
      {
        number: '03',
        title: '让每一次迭代可追溯',
        text: '通过版本、权限与使用记录，持续优化企业已有的最佳实践。',
      },
    ],
    steps: ['沉淀专家方法论', '封装为业务 Skill', '按角色授权使用', '从反馈持续迭代'],
    notes: [
      ['业务经验', '把隐性知识显性化'],
      ['Skill 资产', '让能力可以复用'],
      ['组织协同', '让最佳实践成为标准'],
    ],
  },
  knode: {
    headline: '让企业每一份知识，',
    highlight: '都成为可靠依据。',
    intro:
      'Knode 将散落在文档、项目资料和业务系统中的私有信息整理为可信知识，让团队的每一次检索、问答和决策都建立在可追溯的事实之上。',
    capabilities: [
      {
        number: '01',
        title: '统一接入企业知识',
        text: '支持多格式资料解析与结构化整理，建立清晰、一致的知识脉络。',
      },
      {
        number: '02',
        title: '让答案有据可查',
        text: '通过混合检索与引用溯源，在复杂资料中找到可信、可验证的信息。',
      },
      {
        number: '03',
        title: '沿用既有权限体系',
        text: '按组织、角色与知识空间精细控制访问范围，保证信息只被正确的人看到。',
      },
    ],
    steps: ['接入分散资料', '整理为知识空间', '基于引用可信问答', '在业务中持续更新'],
    notes: [
      ['本地知识', '让资料留在企业边界内'],
      ['可信检索', '让结论始终有出处'],
      ['权限继承', '让知识访问始终可控'],
    ],
  },
}

const documentGroups = [
  {
    label: 'GETTING STARTED',
    title: '开始使用 Knova',
    items: ['产品概览', '私有化部署说明', '企业接入准备清单'],
  },
  {
    label: 'SKILLNAVIGATOR',
    title: 'Skill 管理平台',
    items: ['Skill 资产化方法', '流程编排指南', '权限与版本治理'],
  },
  {
    label: 'KNODE',
    title: '本地知识管理平台',
    items: ['知识接入规范', '可信检索说明', '知识空间与权限'],
  },
]

const journey = [
  {
    number: '01',
    title: '接入',
    text: '连接文档、系统数据与业务流程',
  },
  {
    number: '02',
    title: '沉淀',
    text: '将信息整理为可信的企业知识',
  },
  {
    number: '03',
    title: '调用',
    text: '将经验封装为可复用的 AI Skill',
  },
  {
    number: '04',
    title: '进化',
    text: '让每一次业务实践反哺组织能力',
  },
]

const privatePoints = [
  {
    number: '01',
    title: '数据始终留在您的边界内',
    text: '支持本地、专有云与隔离网络部署，企业知识、模型选择与访问日志均可控。',
  },
  {
    number: '02',
    title: '权限继承您已有的组织体系',
    text: '按人、角色、空间与数据源精细授权，让每一次回答都有正确的可见范围。',
  },
  {
    number: '03',
    title: '从一个场景开始，持续扩展',
    text: '以开放 API 与标准连接器接入现有系统，逐步建立属于企业自己的 AI 能力网络。',
  },
]

function Arrow({ size = 17 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 19 19 5" />
      <path d="M8 5h11v11" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="m6 6 12 12" />
          <path d="m18 6-12 12" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

function Chevron({ open = false }) {
  return (
    <svg
      aria-hidden="true"
      className={open ? 'nav-chevron nav-chevron--open' : 'nav-chevron'}
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function normalisePath(pathname) {
  const path = pathname.replace(/\/+$/, '')
  return path || '/'
}

function useAppRoute() {
  const [path, setPath] = useState(() => normalisePath(window.location.pathname))

  useEffect(() => {
    const updatePath = () => setPath(normalisePath(window.location.pathname))
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  const navigate = (to) => {
    const target = normalisePath(to)
    if (target !== normalisePath(window.location.pathname)) {
      window.history.pushState({}, '', target)
    }
    setPath(target)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return { path, navigate }
}

function AppLink({ to, navigate, onNavigate, children, ...props }) {
  const handleClick = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    event.preventDefault()
    navigate(to)
    onNavigate?.()
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  )
}

function Brand({ navigate, onNavigate }) {
  return (
    <AppLink
      className="brand"
      to="/"
      navigate={navigate}
      onNavigate={onNavigate}
      aria-label="Knova 首页"
    >
      <BrandMark />
      <span>knova</span>
    </AppLink>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  )
}

function ProductSketch({ type }) {
  if (type === 'skill') {
    return (
      <div className="product-sketch product-sketch--skill" aria-hidden="true">
        <div className="sketch-bar">
          <span />
          <span />
          <span />
          <b>Skill library</b>
          <i />
        </div>
        <div className="skill-sketch-body">
          <aside>
            <em />
            <em />
            <em />
            <em />
          </aside>
          <div className="skill-sketch-content">
            <div className="sketch-heading">
              <div>
                <small>团队业务能力</small>
                <strong>已沉淀的 AI Skill</strong>
              </div>
              <span>+ 新建</span>
            </div>
            <div className="skill-sketch-grid">
              {[
                ['经营日报', '数据分析', '↗'],
                ['方案生成', '文档处理', '✦'],
                ['售后助手', '客户服务', '∿'],
                ['合同审查', '风险识别', '⌁'],
              ].map(([name, category, icon]) => (
                <div className="skill-item" key={name}>
                  <b>{icon}</b>
                  <span>
                    <strong>{name}</strong>
                    <small>{category}</small>
                  </span>
                  <i />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="product-sketch product-sketch--knode" aria-hidden="true">
      <div className="sketch-bar">
        <span />
        <span />
        <span />
        <b>Knode / 企业知识空间</b>
        <i />
      </div>
      <div className="knode-sketch-body">
        <aside className="knode-tree">
          <small>知识目录</small>
          <span className="tree-active">▣ 项目交付</span>
          <span>▣ 产品资料</span>
          <span>▣ 技术规范</span>
          <span>▣ 运营制度</span>
        </aside>
        <div className="knode-answer">
          <div className="sketch-search">⌕ 如何缩短项目交付周期？</div>
          <article>
            <p>
              <i>✦</i>
              已从 16 份企业资料中找到答案
            </p>
            <strong>
              建议按「需求确认 — 方案评审 — 里程碑复盘」建立三段式协同机制……
            </strong>
            <div>
              <span>交付手册 V3.2</span>
              <span>项目复盘 / 2025</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, navigate }) {
  return (
    <article className={`product-card product-card--${product.type}`}>
      <div className="product-card__top">
        <span>{product.index}</span>
        <p>{product.category}</p>
      </div>
      <div className="product-card__copy">
        <h3>{product.name}</h3>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <ul>
        {product.features.map((feature) => (
          <li key={feature}>
            <span>+</span>
            {feature}
          </li>
        ))}
      </ul>
      <AppLink className="product-link" to={product.route} navigate={navigate}>
        了解 {product.name}
        <Arrow size={16} />
      </AppLink>
      <ProductSketch type={product.type} />
    </article>
  )
}

function SiteHeader({ path, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const productActive = path.startsWith('/products/')

  const closeNavigation = () => {
    setMenuOpen(false)
    setProductsOpen(false)
  }

  return (
    <header className="site-header">
      <Brand navigate={navigate} onNavigate={closeNavigation} />
      <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="主导航">
        <AppLink
          className={path === '/' ? 'main-nav__link main-nav__link--active' : 'main-nav__link'}
          to="/"
          navigate={navigate}
          onNavigate={closeNavigation}
          aria-current={path === '/' ? 'page' : undefined}
        >
          首页
        </AppLink>
        <div className={productsOpen ? 'product-menu product-menu--open' : 'product-menu'}>
          <button
            className={productActive ? 'main-nav__product main-nav__product--active' : 'main-nav__product'}
            type="button"
            aria-expanded={productsOpen}
            aria-haspopup="true"
            onClick={() => setProductsOpen((open) => !open)}
          >
            产品
            <Chevron open={productsOpen} />
          </button>
          <div className="product-dropdown">
            {productCards.map((product) => (
              <AppLink
                className="product-dropdown__item"
                to={product.route}
                navigate={navigate}
                onNavigate={closeNavigation}
                key={product.name}
              >
                <span>{product.index}</span>
                <div>
                  <strong>{product.name}</strong>
                  <small>{product.category}</small>
                </div>
                <Arrow size={14} />
              </AppLink>
            ))}
          </div>
        </div>
        <AppLink
          className={path === '/docs' ? 'main-nav__link main-nav__link--active' : 'main-nav__link'}
          to="/docs"
          navigate={navigate}
          onNavigate={closeNavigation}
          aria-current={path === '/docs' ? 'page' : undefined}
        >
          文档
        </AppLink>
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon open={menuOpen} />
      </button>
    </header>
  )
}

function HomePage({ navigate }) {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-cross hero-cross--one" />
        <div className="hero-cross hero-cross--two" />
        <div className="hero-content">
          <SectionLabel>PRIVATE AI · KNOWLEDGE ASSETS</SectionLabel>
          <h1>
            Knova，让企业知识
            <span>成为持续进化的能力。</span>
          </h1>
          <p className="hero-copy">
            面向企业私有化 AI 的一体化配套，让知识可信、能力可复用、业务持续向前。
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="#contact">
              探索您的 AI 路径
              <Arrow />
            </a>
            <a className="text-action" href="#products">
              查看产品
              <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-meta">
          <span>SKILLNAVIGATOR</span>
          <i />
          <span>KNODE</span>
          <i />
          <span>PRIVATE AI SYSTEMS</span>
        </div>
        <div className="hero-stamp">
          <span>KNOWLEDGE</span>
          <strong>→</strong>
          <span>CAPABILITY</span>
        </div>
      </section>

      <section className="manifesto" id="capabilities">
        <div className="manifesto-heading">
          <SectionLabel>THE KNOVA WAY</SectionLabel>
          <h2>
            不是把 AI 加进企业，
            <span>而是让企业知识进入 AI。</span>
          </h2>
        </div>
        <div className="manifesto-side">
          <p>
            Knova 从您的既有知识与流程开始，将信息、经验和决策依据沉淀为可治理、可调用的组织资产。
          </p>
          <a className="text-action text-action--line" href="#private-ai">
            了解私有化部署
            <Arrow size={15} />
          </a>
        </div>
        <div className="asset-strip">
          <div>
            <span>01</span>
            <strong>企业知识</strong>
            <p>让数据、文档和经验有统一的归属</p>
          </div>
          <div>
            <span>02</span>
            <strong>AI Skill</strong>
            <p>让最佳实践变成每个人可用的能力</p>
          </div>
          <div>
            <span>03</span>
            <strong>业务价值</strong>
            <p>让每一次调用都推动真实业务向前</p>
          </div>
        </div>
      </section>

      <section className="products-section" id="products">
        <div className="section-head">
          <div>
            <SectionLabel>PRODUCTS</SectionLabel>
            <h2>两个产品，一套企业智能体系。</h2>
          </div>
          <p>从可信的本地知识，到可执行的业务 Skill，为企业建立持续生长的 AI 能力。</p>
        </div>
        <div className="product-grid">
          {productCards.map((product) => (
            <ProductCard product={product} navigate={navigate} key={product.name} />
          ))}
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-intro">
          <SectionLabel>FROM KNOWLEDGE TO ACTION</SectionLabel>
          <h2>
            每一次使用，
            <span>都在让组织变得更强。</span>
          </h2>
          <p>
            Knova 让企业在自己的数据边界内，将知识沉淀、能力调用与业务反馈连接为一个持续运转的闭环。
          </p>
        </div>
        <ol className="journey-list">
          {journey.map((item) => (
            <li key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="journey-footer">
          <span>YOUR DATA</span>
          <i />
          <span>YOUR KNOWLEDGE</span>
          <i />
          <span>YOUR AI</span>
        </div>
      </section>

      <section className="private-section" id="private-ai">
        <div className="private-intro">
          <SectionLabel>PRIVATE BY DESIGN</SectionLabel>
          <h2>
            AI 的价值，
            <span>始于可控。</span>
          </h2>
          <p>
            真实的企业 AI，不该以牺牲数据边界为代价。Knova 让安全、治理和业务价值从一开始就站在一起。
          </p>
          <div className="private-seal">
            <BrandMark />
            <span>PRIVATE AI<br />FOR ENTERPRISE</span>
          </div>
        </div>
        <div className="private-list">
          {privatePoints.map((point) => (
            <article key={point.number}>
              <span>{point.number}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit contact-orbit--one" />
        <div className="contact-orbit contact-orbit--two" />
        <SectionLabel>START WITH ONE REAL SCENARIO</SectionLabel>
        <h2>
          让下一次业务经验，
          <span>成为全组织的能力。</span>
        </h2>
        <p>从一个值得做的场景开始，一起构建企业自己的私有化 AI 路径。</p>
        <a className="button button--light" href="mailto:hello@knova.ai?subject=Knova%20方案咨询">
          预约方案沟通
          <Arrow />
        </a>
        <small>hello@knova.ai</small>
      </section>
    </main>
  )
}

function ProductDetailPage({ product, navigate }) {
  const detail = productDetails[product.type]

  return (
    <main className={`product-page product-page--${product.type}`}>
      <section className="product-page-hero">
        <div className="product-page-hero__inner">
          <div className="breadcrumb">
            <AppLink to="/" navigate={navigate}>首页</AppLink>
            <span>/</span>
            <span>产品</span>
            <span>/</span>
            <strong>{product.name}</strong>
          </div>
          <div className="product-page-hero__grid">
            <div className="product-page-hero__copy">
              <SectionLabel>{product.category}</SectionLabel>
              <h1>
                {detail.headline}
                <span>{detail.highlight}</span>
              </h1>
              <p>{detail.intro}</p>
              <div className="product-page-hero__actions">
                <a className="button button--dark" href="#product-capabilities">
                  查看核心能力
                  <Arrow />
                </a>
                <a className="text-action" href="mailto:hello@knova.ai?subject=Knova%20方案咨询">
                  预约方案沟通
                  <Arrow size={15} />
                </a>
              </div>
            </div>
            <div className="product-page-hero__visual">
              <ProductSketch type={product.type} />
            </div>
          </div>
          <div className="product-page-notes">
            {detail.notes.map(([title, text], index) => (
              <div key={title}>
                <span>0{index + 1}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-detail-capabilities" id="product-capabilities">
        <div className="product-detail-capabilities__head">
          <SectionLabel>WHAT IT ENABLES</SectionLabel>
          <h2>
            为企业构建可持续的
            <span>{product.name} 能力。</span>
          </h2>
        </div>
        <div className="product-detail-capability-grid">
          {detail.capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-workflow">
        <div className="product-workflow__intro">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2>
            从第一份资料，
            <span>到第一项可用能力。</span>
          </h2>
        </div>
        <ol>
          {detail.steps.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              {index < detail.steps.length - 1 && <i>→</i>}
            </li>
          ))}
        </ol>
      </section>

      <section className="product-page-cta">
        <p>{product.name.toUpperCase()} FOR ENTERPRISE KNOWLEDGE</p>
        <h2>从一个真实场景，开始您的企业 AI 路径。</h2>
        <a className="button button--dark" href="mailto:hello@knova.ai?subject=Knova%20产品咨询">
          与 Knova 团队沟通
          <Arrow />
        </a>
      </section>
    </main>
  )
}

function DocsPage({ navigate }) {
  return (
    <main className="docs-page">
      <section className="docs-hero">
        <div className="breadcrumb">
          <AppLink to="/" navigate={navigate}>首页</AppLink>
          <span>/</span>
          <strong>文档</strong>
        </div>
        <SectionLabel>KNOVA DOCUMENTATION</SectionLabel>
        <h1>
          从了解产品，
          <span>到构建企业 AI 能力。</span>
        </h1>
        <p>这里整理了 Knova 的产品说明、部署准备与使用方法，帮助您的团队更快开始。</p>
        <div className="docs-search" aria-label="文档搜索提示">
          <span>⌕</span>
          搜索文档主题
          <kbd>⌘ K</kbd>
        </div>
      </section>

      <section className="docs-index">
        <div className="docs-index__intro">
          <SectionLabel>EXPLORE</SectionLabel>
          <h2>从最需要的内容开始。</h2>
        </div>
        <div className="docs-grid">
          {documentGroups.map((group) => (
            <article key={group.label}>
              <p>{group.label}</p>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="mailto:hello@knova.ai?subject=Knova%20文档咨询">
                      {item}
                      <Arrow size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="docs-help">
        <div>
          <SectionLabel>NEED HELP?</SectionLabel>
          <h2>找不到需要的内容？</h2>
        </div>
        <a className="button button--dark" href="mailto:hello@knova.ai?subject=Knova%20文档咨询">
          联系我们
          <Arrow />
        </a>
      </section>
    </main>
  )
}

function SiteFooter({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Brand navigate={navigate} />
        <p>让知识成为企业持续进化的力量。</p>
        <a href="mailto:hello@knova.ai">
          hello@knova.ai
          <Arrow size={15} />
        </a>
      </div>
      <div className="footer-nav">
        <AppLink to="/" navigate={navigate}>首页</AppLink>
        <AppLink to={productCards[0].route} navigate={navigate}>产品</AppLink>
        <AppLink to="/docs" navigate={navigate}>文档</AppLink>
        <a href="mailto:hello@knova.ai">联系我们</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} KNOVA. ALL RIGHTS RESERVED.</span>
        <span>PRIVATE AI · KNOWLEDGE ASSETS · HUMAN VALUE</span>
      </div>
    </footer>
  )
}

function App() {
  const { path, navigate } = useAppRoute()
  const product = productCards.find((item) => item.route === path)

  let page = <HomePage navigate={navigate} />

  if (product) {
    page = <ProductDetailPage product={product} navigate={navigate} />
  } else if (path === '/docs') {
    page = <DocsPage navigate={navigate} />
  }

  return (
    <div className="site">
      <SiteHeader path={path} navigate={navigate} />
      {page}
      <SiteFooter navigate={navigate} />
    </div>
  )
}

export default App
