/* Router + views. Content lives in js/data.js. */

(function () {
  'use strict';

  const app = document.getElementById('app');
  const navLinks = document.getElementById('navLinks');
  const drawerLinks = document.getElementById('drawerLinks');
  const burger = document.getElementById('burger');
  const drawerClose = document.getElementById('drawerClose');
  const drawerScrim = document.getElementById('drawerScrim');

  const esc = (s) => String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  const findProject = (id) => PROJECTS.find((p) => p.id === id);

  /* Shared partials --------------------------------------------------------- */

  // Backdrop for a project panel: the real photo once `image` is set, and the
  // striped gradient placeholder until then.
  function mediaFill(project) {
    if (project.image) {
      return `<img src="${esc(project.image)}" alt="${esc(project.title)}"
                   style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">`;
    }
    return '<div class="stripes"></div>';
  }

  function tagList(tags, cls) {
    return tags.map((t) => `<span class="${cls}">${esc(t)}</span>`).join('');
  }

  /* Home -------------------------------------------------------------------- */

  function featureCard(p) {
    const media = `
      <div class="feature__media" style="background:${p.grad};">
        ${mediaFill(p)}
        <span class="feature__num">${p.num}</span>
        <div class="feature__word${p.monoWord ? ' feature__word--mono' : ''}">${p.word}</div>
        ${p.image ? '' : `<span class="feature__hint">${esc(p.cardHint)}</span>`}
      </div>`;

    const body = `
      <div class="feature__body">
        <p class="feature__cat">${esc(p.cat)}</p>
        <h3 class="feature__title">${esc(p.cardTitle || p.title)}</h3>
        <p class="feature__desc">${esc(p.cardDesc)}</p>
        <div class="tags">${tagList(p.cardTags, 'tag')}</div>
        <span class="feature__cta">Read the build guide →</span>
      </div>`;

    // The middle card mirrors the layout — text first, media second.
    return `
      <a class="feature${p.reverse ? ' feature--reverse' : ''}" href="#/projects/${p.id}">
        ${p.reverse ? body + media : media + body}
      </a>`;
  }

  function viewHome() {
    return `
      <section class="hero">
        <div class="hero__blobs" aria-hidden="true">
          <div class="blob blob--a"></div>
          <div class="blob blob--b"></div>
          <div class="blob blob--c"></div>
        </div>
        <div class="hero__inner">
          <div class="badge">
            <span class="badge__dot"></span>
            EEE graduate · maker · engineer
          </div>
          <h1 class="hero__title">
            I'm <span class="gradient-text">YC</span> — I design, build and document hands-on engineering projects, from robotics to hardware and AI.
          </h1>
          <p class="hero__lede">
            From walking robots to solar-measurement hardware and agentic AI pipelines — here's what I've been making, each with a full step-by-step build guide.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="#/projects">View projects →</a>
            <a class="btn btn--soft" href="#/contact">Get in touch</a>
          </div>
        </div>
        <div class="hero__hint" aria-hidden="true">
          scroll
          <span>↓</span>
        </div>
      </section>

      <section class="section section--featured">
        <div class="section__head">
          <div>
            <p class="eyebrow">// featured work</p>
            <h2 class="section__title">Projects</h2>
          </div>
          <a class="link-arrow" href="#/projects">See all →</a>
        </div>
        <div class="features">
          ${PROJECTS.map(featureCard).join('')}
        </div>
      </section>

      <section class="section section--skills">
        <p class="eyebrow">// what I work with</p>
        <h2 class="section__title" style="margin-bottom:38px;">Skills &amp; tools</h2>
        <div class="skills-grid">
          ${SKILLS.map((s) => `
            <div class="skill-card">
              <h3>${esc(s.title)}</h3>
              <div class="chips">${tagList(s.items, 'chip')}</div>
            </div>`).join('')}
        </div>
      </section>`;
  }

  /* Projects index ---------------------------------------------------------- */

  function viewProjects() {
    return `
      <section class="section--page">
        <p class="eyebrow" style="margin-bottom:10px;">// all projects</p>
        <h1 class="page-title">Projects</h1>
        <p class="page-lede">A mix of robotics, hardware and software. Click any project for the full setup and step-by-step build guide.</p>
        <div class="project-grid">
          ${PROJECTS.map((p) => `
            <a class="project-card" href="#/projects/${p.id}">
              <div class="project-card__media" style="background:${p.cardGrad};">
                ${mediaFill(p)}
                <span class="project-card__num">${p.num}</span>
                <span class="project-card__word${p.monoWord ? ' project-card__word--mono' : ''}">${esc(p.gridWord)}</span>
              </div>
              <div class="project-card__body">
                <p class="project-card__cat">${esc(p.cat)}</p>
                <h3 class="project-card__title">${esc(p.title)}</h3>
                <p class="project-card__desc">${esc(p.gridDesc)}</p>
                <span class="project-card__cta">Build guide →</span>
              </div>
            </a>`).join('')}
        </div>
      </section>`;
  }

  /* Project detail ---------------------------------------------------------- */

  function viewDetail(p) {
    const hasCode = p.codeBlocks.length > 0;
    const hasCommands = p.commands.length > 0;
    const hasDiagram = Boolean(p.diagramLabel);

    const codeSection = !hasCode ? '' : `
      <section>
        <div class="block__head">
          <span class="block__num">04</span>
          <h2 class="block__title">Get it running</h2>
        </div>
        <div class="code-blocks">
          ${p.codeBlocks.map((b) => `
            <div>
              <p class="code__label">${esc(b.label)}</p>
              <div class="code"><pre>${esc(b.code)}</pre></div>
            </div>`).join('')}
        </div>
      </section>`;

    const commandSection = !hasCommands ? '' : `
      <section>
        <div class="block__head">
          <span class="block__num">04</span>
          <h2 class="block__title">Operating the robot</h2>
        </div>
        <p class="commands__intro">Send each numeric command over Bluetooth serial, followed by a newline. The robot replies <code>ok</code> once processed — start with <code>0</code> to reach the rest pose.</p>
        <div class="commands">
          ${p.commands.map((c) => `
            <div class="command">
              <span class="command__key">${esc(c.cmd)}</span>
              <span class="command__desc">${esc(c.desc)}</span>
            </div>`).join('')}
        </div>
      </section>`;

    const diagramSection = !hasDiagram ? '' : `
      <section>
        <div class="block__head">
          <span class="block__num">05</span>
          <h2 class="block__title">Wiring &amp; schematic</h2>
        </div>
        <div class="diagram">
          <div class="stripes"></div>
          <span class="diagram__label">${esc(p.diagramLabel)}</span>
        </div>
      </section>`;

    return `
      <article>
        <div class="detail__bar">
          <a class="back-link" href="#/projects">← All projects</a>
          <a class="btn--pill-soft" href="${esc(p.repo)}" target="_blank" rel="noopener">View on GitHub ↗</a>
        </div>

        <header class="detail__header">
          <p class="detail__cat">${esc(p.cat)}</p>
          <h1 class="detail__title">${esc(p.title)}</h1>
          <p class="detail__subtitle">${esc(p.subtitle)}</p>
          <div class="tags">${tagList(p.tags, 'detail__tag')}</div>
        </header>

        <div class="detail__hero-wrap">
          <div class="detail__hero" style="background:${p.grad};">
            ${mediaFill(p)}
            ${p.image ? '' : `<span class="detail__hero-hint">${esc(p.heroHint)}</span>`}
          </div>
        </div>

        <div class="detail__body">
          <section>
            <div class="block__head">
              <span class="block__num">01</span>
              <h2 class="block__title">Overview</h2>
            </div>
            <div class="prose">
              ${p.overviewParas.map((t) => `<p>${esc(t)}</p>`).join('')}
            </div>
          </section>

          <section>
            <div class="block__head">
              <span class="block__num">02</span>
              <h2 class="block__title">Setup &amp; prerequisites</h2>
            </div>
            <div class="prereq-grid">
              ${p.prereqGroups.map((g) => `
                <div class="prereq">
                  <p class="prereq__label">${esc(g.label)}</p>
                  <div class="prereq__items">
                    ${g.items.map((it) => `<div class="prereq__item"><span>${esc(it)}</span></div>`).join('')}
                  </div>
                </div>`).join('')}
            </div>
          </section>

          <section>
            <div class="block__head block__head--steps">
              <span class="block__num">03</span>
              <h2 class="block__title">Step-by-step build guide</h2>
            </div>
            <div class="steps">
              ${p.steps.map((s, i) => `
                <div class="step">
                  <div class="step__num">${i + 1}</div>
                  <div>
                    <h3>${esc(s.title)}</h3>
                    <p>${esc(s.body)}</p>
                  </div>
                </div>`).join('')}
            </div>
          </section>

          ${codeSection}
          ${commandSection}
          ${diagramSection}

          <section>
            <div class="block__head">
              <span class="block__num">06</span>
              <h2 class="block__title">Results &amp; demo</h2>
            </div>
            <div class="results">
              <div class="results__media" style="background:${p.grad};">
                ${mediaFill(p)}
                ${p.image ? '' : '<span class="results__hint">// drop: demo photo or video still</span>'}
              </div>
              <p>${esc(p.results)}</p>
            </div>
          </section>

          <section>
            <div class="block__head">
              <span class="block__num">07</span>
              <h2 class="block__title">Downloads &amp; links</h2>
            </div>
            <div class="downloads">
              ${p.downloads.map((d) => `
                <a class="download" href="${esc(d.url)}" target="_blank" rel="noopener">
                  <span>${esc(d.label)}</span>
                  <span class="download__arrow">↗</span>
                </a>`).join('')}
            </div>
          </section>
        </div>
      </article>`;
  }

  /* About ------------------------------------------------------------------- */

  function viewAbout() {
    return `
      <section class="section--about">
        <p class="eyebrow" style="margin-bottom:10px;">// about</p>
        <h1 class="page-title">A bit about me</h1>
        <div class="about-grid">
          <div>
            <div class="about__portrait">
              <div class="stripes"></div>
              <span class="about__monogram">YC</span>
            </div>
            <div class="about__facts">
              <dl>
                ${ABOUT.facts.map(([k, v]) => `
                  <div class="about__fact">
                    <dt>${esc(k)}</dt>
                    <dd>${esc(v)}</dd>
                  </div>`).join('')}
              </dl>
            </div>
          </div>
          <div class="about__copy">
            ${ABOUT.paras.map((t) => `<p>${t}</p>`).join('')}
            <h3>What I like building</h3>
            <div class="about__likes">
              ${ABOUT.likes.map((l) => `<div class="about__like">${l}</div>`).join('')}
            </div>
          </div>
        </div>
      </section>`;
  }

  /* Résumé ------------------------------------------------------------------ */

  function viewResume() {
    const r = RESUME;
    return `
      <section class="section--resume">
        <div class="resume__head no-print">
          <div>
            <p class="eyebrow" style="margin-bottom:10px;">// résumé</p>
            <h1 class="page-title">Résumé</h1>
          </div>
          <button class="btn--print" id="printResume">Download PDF ↓</button>
        </div>
        <div class="resume">
          <div class="resume__id">
            <h2 class="resume__name">${esc(r.name)}</h2>
            <p class="resume__role">${esc(r.role)}</p>
            <p class="resume__contact">${esc(r.contact)}</p>
          </div>
          <div class="resume__cols">
            <div class="resume__col">
              <div>
                <h3 class="resume__section-title">Education</h3>
                ${r.education.map((e) => `
                  <div class="resume__row">
                    <div>
                      <p class="resume__row-title">${esc(e.school)}</p>
                      <p class="resume__row-sub">${esc(e.degree)}</p>
                    </div>
                    <span class="resume__date">${esc(e.date)}</span>
                  </div>`).join('')}
              </div>
              <div>
                <h3 class="resume__section-title">Experience &amp; research</h3>
                <div class="resume__entries">
                  ${r.experience.map((x) => `
                    <div>
                      <div class="resume__row">
                        <p class="resume__row-title">${esc(x.role)}</p>
                        <span class="resume__date">${esc(x.date)}</span>
                      </div>
                      ${x.org ? `<p class="resume__org">${esc(x.org)}</p>` : ''}
                      <p class="resume__desc${x.org ? '' : ' resume__desc--tight'}">${esc(x.desc)}</p>
                    </div>`).join('')}
                </div>
              </div>
              <div>
                <h3 class="resume__section-title">Selected projects</h3>
                <div class="resume__links-list">
                  ${r.selected.map((s) => `
                    <a class="resume__project-link no-print" href="#/projects/${s.id}">→ ${esc(s.label)}</a>`).join('')}
                </div>
              </div>
            </div>
            <div class="resume__col resume__col--side">
              <div>
                <h3 class="resume__section-title">Skills</h3>
                <div class="tags">${tagList(r.skills, 'resume__chip')}</div>
              </div>
              <div>
                <h3 class="resume__section-title">Interests</h3>
                <p class="resume__interests">${esc(r.interests)}</p>
              </div>
              <div>
                <h3 class="resume__section-title">Links</h3>
                <div class="resume__links">
                  ${r.links.map((l) => `
                    <a href="${esc(l.url)}"${l.url.startsWith('mailto:') ? '' : ' target="_blank" rel="noopener"'}>${esc(l.label)}</a>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
  }

  /* Contact ----------------------------------------------------------------- */

  function viewContact() {
    return `
      <section class="section--contact">
        <p class="eyebrow">// contact</p>
        <h1 class="contact__title">Let's build <span class="gradient-text">something</span>.</h1>
        <p class="contact__lede">Questions, collaborations, or just want to talk shop about robots and circuits? Reach out — I'd love to hear from you.</p>
        <div class="contact__grid">
          ${CONTACT.map((c) => `
            <a class="contact-card" href="${esc(c.url)}"${c.external ? ' target="_blank" rel="noopener"' : ''}>
              <div class="contact-card__icon ${c.iconClass}">${esc(c.icon)}</div>
              <div>
                <p class="contact-card__label">${esc(c.label)}</p>
                <p class="contact-card__value${c.valueBreak ? ' contact-card__value--break' : ''}">${esc(c.value)}</p>
              </div>
            </a>`).join('')}
        </div>
      </section>`;
  }

  /* Nav --------------------------------------------------------------------- */

  function renderNav(screen) {
    const isActive = (key) => key === screen || (key === 'projects' && screen === 'detail');

    navLinks.innerHTML = NAV.map((n) => `
      <a class="nav__link${isActive(n.key) ? ' is-active' : ''}" href="${n.href}"
         ${isActive(n.key) ? 'aria-current="page"' : ''}>${n.label}</a>`).join('');

    drawerLinks.innerHTML = NAV.map((n) => `
      <a class="drawer__link" href="${n.href}">${n.label}</a>`).join('');
  }

  function setMenu(open) {
    document.body.classList.toggle('is-menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
  }

  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('is-menu-open')));
  drawerClose.addEventListener('click', () => setMenu(false));
  drawerScrim.addEventListener('click', () => setMenu(false));
  drawerLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 860) setMenu(false);
  });

  /* Router ------------------------------------------------------------------ */

  function parseHash() {
    const raw = window.location.hash.replace(/^#\/?/, '');
    const [head, id] = raw.split('/');

    if (!head) return { screen: 'home' };
    if (head === 'projects') {
      if (!id) return { screen: 'projects' };
      const p = findProject(id);
      return p ? { screen: 'detail', project: p } : { screen: 'projects' };
    }
    if (['about', 'resume', 'contact'].includes(head)) return { screen: head };
    return { screen: 'home' };
  }

  const TITLES = {
    home: 'Tan Yi Cherng — EEE graduate · maker · engineer',
    projects: 'Projects — Tan Yi Cherng',
    about: 'About — Tan Yi Cherng',
    resume: 'Résumé — Tan Yi Cherng',
    contact: 'Contact — Tan Yi Cherng'
  };

  let lastScreen = null;

  function render() {
    const route = parseHash();
    const { screen, project } = route;

    const views = {
      home: viewHome,
      projects: viewProjects,
      about: viewAbout,
      resume: viewResume,
      contact: viewContact,
      detail: () => viewDetail(project)
    };

    app.innerHTML = views[screen]();
    document.title = screen === 'detail' ? `${project.title} — Tan Yi Cherng` : TITLES[screen];
    renderNav(screen);

    const printBtn = document.getElementById('printResume');
    if (printBtn) printBtn.addEventListener('click', () => window.print());

    // Only scroll to top on an actual navigation, not on first paint of a
    // deep link the browser is already positioned for.
    if (lastScreen !== null) window.scrollTo({ top: 0 });
    lastScreen = screen;

    app.style.animation = 'none';
    void app.offsetWidth;
    app.style.animation = 'fadeUp .4s ease both';
  }

  window.addEventListener('hashchange', render);
  render();
})();
