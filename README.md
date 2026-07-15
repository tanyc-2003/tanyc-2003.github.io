# tanyc-2003.github.io

Personal portfolio for Tan Yi Cherng — robotics, embedded hardware and AI projects,
each with a full step-by-step build guide.

Live at **https://tanyc-2003.github.io/**

## Stack

Plain HTML, CSS and JavaScript — no build step, no dependencies. Push to `main`
and GitHub Pages serves it. Fonts (Poppins, JetBrains Mono) come from Google Fonts.

```
index.html      page shell — nav, mobile drawer, footer
css/style.css   design tokens + every component style
js/data.js      all site content (projects, skills, about, résumé, contact)
js/app.js       hash router + view templates
images/         image assets
```

## Routing

Client-side hash routing, so deep links work on GitHub Pages without redirect rules:

| Route | Screen |
| --- | --- |
| `#/` | Home |
| `#/projects` | Projects index |
| `#/projects/<id>` | Project build guide |
| `#/about` | About |
| `#/resume` | Résumé (the Download PDF button prints the page) |
| `#/contact` | Contact |

Unknown project ids fall back to the projects index.

## Editing content

Everything readable lives in `js/data.js` — no template edits needed.

**Add a project:** append an object to `PROJECTS`. The `id` becomes its URL.
Detail sections appear only when they have content: a project with an empty
`codeBlocks` array has no "Get it running" section, an empty `commands` array
has no command table, and a null `diagramLabel` has no wiring section.

**Add a photo:** project panels currently show striped gradient placeholders
with `// drop: ...` hints, as in the design. Set a project's `image` to a path
(e.g. `'images/quadruped.jpg'`) and the photo replaces the placeholder on the
home card, projects grid and detail hero.

## Local preview

Any static server works, e.g.:

```
python -m http.server 8000
```

Then open http://localhost:8000.

## Design source

Recreated from `Portfolio.dc.html`, designed in [Claude Design](https://claude.ai/design).
