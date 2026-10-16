import React, { useState } from 'react'

const navigation = [
  { label: '产品', href: '#products' },
  { label: '能力', href: '#capabilities' },
  { label: '私有部署', href: '#private-ai' },
]

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

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  )
}

function Brand({ onClick }) {
  return (
    <a className="brand" href="#top" aria-label="Knova 首页" onClick={onClick}>
      <BrandMark />
      <span>knova</span>
    </a>
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

function ProductCard({ product }) {
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
      <a className="product-link" href="#contact">
        了解 {product.name}
        <Arrow size={16} />
      </a>
      <ProductSketch type={product.type} />
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="site-header">
        <Brand onClick={closeMenu} />
        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`} aria-label="主导航">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="main-nav__contact" href="#contact" onClick={closeMenu}>
            预约咨询
            <Arrow size={15} />
          </a>
        </nav>
        <a className="header-cta" href="#contact">
          预约咨询
          <Arrow size={15} />
        </a>
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
              <ProductCard product={product} key={product.name} />
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

      <footer className="site-footer">
        <div className="footer-top">
          <Brand />
          <p>让知识成为企业持续进化的力量。</p>
          <a href="mailto:hello@knova.ai">
            hello@knova.ai
            <Arrow size={15} />
          </a>
        </div>
        <div className="footer-nav">
          <a href="#products">产品</a>
          <a href="#capabilities">能力</a>
          <a href="#private-ai">私有部署</a>
          <a href="#contact">联系我们</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} KNOVA. ALL RIGHTS RESERVED.</span>
          <span>PRIVATE AI · KNOWLEDGE ASSETS · HUMAN VALUE</span>
        </div>
      </footer>
    </div>
  )
}

export default App
