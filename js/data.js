/* Site content. Everything the pages render comes from here — edit this file
   to add a project or change copy; no template edits needed.

   Each project's `media` describes the placeholder panel shown until a real
   photo exists. Set `image` to a path under images/ and it replaces the
   gradient placeholder everywhere that project appears. */

const NAV = [
  { key: 'home', label: 'Home', href: '#/' },
  { key: 'projects', label: 'Projects', href: '#/projects' },
  { key: 'about', label: 'About', href: '#/about' },
  { key: 'resume', label: 'Résumé', href: '#/resume' },
  { key: 'contact', label: 'Contact', href: '#/contact' }
];

const PROJECTS = [
  {
    id: 'quadruped',
    num: '01',
    cat: 'Robotics · Embedded',
    title: 'Quadruped Walking Robot',
    subtitle: 'A Bluetooth-controlled, eight-servo walking robot built for the UoSM Robotics Club workshop.',
    cardDesc: 'A Bluetooth-controlled, eight-servo walking robot built for the UoSM Robotics Club workshop — firmware, calibration and CAD included.',
    gridDesc: 'Bluetooth-controlled eight-servo walker for the UoSM Robotics Club workshop.',
    tags: ['Arduino', 'PCA9685', 'Bluetooth', 'CAD'],
    cardTags: ['Arduino', 'PCA9685', 'Bluetooth'],
    grad: 'linear-gradient(135deg,#2e80ff 0%,#7b5cff 100%)',
    cardGrad: 'linear-gradient(135deg,#2e80ff,#7b5cff)',
    word: 'Robot',
    gridWord: 'Quadruped',
    monoWord: false,
    heroHint: '// drop: quadruped demo shot',
    cardHint: '// drop: quadruped demo shot',
    image: null,
    repo: 'https://github.com/tanyc-2003/UoSM-Robotics-Club-Quadrupet-Robot-24-25',
    overviewParas: [
      'A workshop-friendly quadruped robot: an Arduino sketch drives eight servos through a PCA9685 PWM driver, while an HC-06 Bluetooth module lets you steer it with simple numeric commands.',
      'The repo bundles the firmware, the per-servo calibration values, the CAD / manufacturing files for the body, and the workshop participant guide.'
    ],
    prereqGroups: [
      { label: 'Hardware', items: ['Arduino-compatible board', 'PCA9685 / Adafruit PWM servo driver', '8 × servos on channels 0–7', 'HC-06 Bluetooth serial module', 'Servo-rated power supply'] },
      { label: 'Software', items: ['Arduino IDE', 'Adafruit PWM Servo Driver library'] }
    ],
    steps: [
      { title: 'Fabricate the body', body: 'Print or laser-cut the parts from Parts CAD/ and assemble the four legs and chassis.' },
      { title: 'Wire the servos', body: 'Connect the eight servos to PCA9685 channels 0–7, matching the sketch’s names: FL1/FL2, FR1/FR2, BL1/BL2, BR1/BR2.' },
      { title: 'Add Bluetooth', body: 'Wire the HC-06 module to the board’s serial pins for wireless control.' },
      { title: 'Load the firmware', body: 'Open Quadruped_Workshop_code.ino in the Arduino IDE and install the Adafruit PWM Servo Driver library.' },
      { title: 'Calibrate', body: 'Tune the per-servo values in Quadruped_parameters.h so every joint sits at its true neutral position.' },
      { title: 'Pair & upload', body: 'Set the Bluetooth name (QuadrupedPrototype) and PIN (1111), then upload the sketch to the board.' }
    ],
    codeBlocks: [],
    commands: [
      { cmd: '0', desc: 'Rest position' },
      { cmd: '1', desc: 'Move forward' },
      { cmd: '2', desc: 'Move backward' },
      { cmd: '3', desc: 'Turn left' },
      { cmd: '4', desc: 'Turn right' }
    ],
    diagramLabel: '// wiring: 8× servo → PCA9685 → Arduino → HC-06',
    results: 'Send 0 to settle into the rest pose, then drive it around with commands 1–4 over Bluetooth — the sketch replies “ok” after each move. A reliable crowd-pleaser for club demos and outreach.',
    downloads: [
      { label: 'GitHub repository', url: 'https://github.com/tanyc-2003/UoSM-Robotics-Club-Quadrupet-Robot-24-25' },
      { label: 'Workshop participant guide (PDF)', url: 'https://github.com/tanyc-2003/UoSM-Robotics-Club-Quadrupet-Robot-24-25' },
      { label: 'Parts CAD files', url: 'https://github.com/tanyc-2003/UoSM-Robotics-Club-Quadrupet-Robot-24-25' }
    ]
  },
  {
    id: 'ivtracer',
    num: '02',
    cat: 'Power Electronics · IoT',
    title: 'Low-Cost I–V Curve Tracer',
    subtitle: 'A portable, internet-enabled I–V curve tracer for solar PV modules, built around a Ćuk-converter electronic load.',
    cardDesc: 'A portable, internet-enabled I–V curve tracer for solar PV modules using a Ćuk-converter electronic load and a cloud dashboard.',
    gridDesc: 'Portable, internet-enabled solar PV tracer with a Ćuk-converter load.',
    tags: ['Ćuk converter', 'Python', 'Cloud', 'Research'],
    cardTags: ['Ćuk converter', 'Python', 'Research'],
    grad: 'linear-gradient(135deg,#2e80ff 0%,#f65bf9 100%)',
    cardGrad: 'linear-gradient(135deg,#2e80ff,#f65bf9)',
    word: 'I–V',
    gridWord: 'I–V Tracer',
    monoWord: false,
    reverse: true,
    heroHint: '// drop: device + I–V curve plot',
    cardHint: '// drop: I–V curve plot',
    image: null,
    repo: 'https://github.com/tanyc-2003/Low_Cost_IV_Curve_Tracer',
    overviewParas: [
      'A portable, internet-enabled I–V curve tracer for photovoltaic modules, built around a Ćuk-converter electronic load. It sweeps a solar device’s operating points, measures voltage and current, and derives the P–V characteristic.',
      'Where lab tracers are expensive and bench-bound, this one is low-cost, portable and cloud-connected — data is uploaded and viewed from a web interface, making it suitable for field and teaching use.',
      'A University of Southampton research project supervised by Dr. Vun Jack.'
    ],
    prereqGroups: [
      { label: 'Hardware', items: ['PV module / cell under test', 'Ćuk-converter electronic load', 'Sensing + embedded controller', 'Suitable power supply'] },
      { label: 'Software', items: ['Python 3 environment', 'requirements.txt dependencies', 'Web browser for the dashboard'] }
    ],
    steps: [
      { title: 'Connect the PV device', body: 'Wire the solar module or cell into the Ćuk-converter electronic-load stage.' },
      { title: 'Run the sweep', body: 'Trigger an electrical sweep from the controller to walk across the device’s operating points.' },
      { title: 'Acquire the data', body: 'Sample voltage and current across the sweep and package the readings for transfer.' },
      { title: 'Upload to the cloud', body: 'Transmit the I–V and derived P–V data to the cloud endpoint / storage.' },
      { title: 'Visualise', body: 'Open the web interface to inspect the I–V curve, P–V curve and measurement-session records.' }
    ],
    codeBlocks: [
      {
        label: 'Clone & set up the environment',
        code: 'git clone https://github.com/tanyc-2003/Low_Cost_IV_Curve_Tracer.git\ncd Low_Cost_IV_Curve_Tracer\n\npython -m venv .venv\nsource .venv/bin/activate      # Windows: .venv\\Scripts\\activate\n\npip install -r requirements.txt'
      }
    ],
    commands: [],
    diagramLabel: '// system block diagram: PV → Ćuk load → sensing/MCU → cloud → web',
    results: 'The dashboard renders live I–V and P–V curves per measurement session — a compact, economical bridge between hardware measurement and cloud access, ready for field and classroom use.',
    downloads: [
      { label: 'GitHub repository', url: 'https://github.com/tanyc-2003/Low_Cost_IV_Curve_Tracer' },
      { label: 'Research paper — Portable Low-Cost I–V Curve Tracer', url: 'https://github.com/tanyc-2003/Low_Cost_IV_Curve_Tracer' }
    ]
  },
  {
    id: 'llmagent',
    num: '03',
    cat: 'AI · Software',
    title: 'Java → C++ Transpilation Agent',
    cardTitle: 'Java → C++ Agent',
    subtitle: 'An agentic LangGraph pipeline that autonomously converts multi-file Java projects into compilable, tested C++17.',
    cardDesc: 'An agentic LangGraph pipeline that autonomously converts multi-file Java projects into compilable, tested C++17 — with self-correction and build verification.',
    gridDesc: 'Agentic LangGraph pipeline that transpiles Java to tested, compilable C++17.',
    tags: ['LangGraph', 'LLM', 'Python', 'RAG'],
    cardTags: ['LangGraph', 'LLM', 'Python'],
    grad: 'linear-gradient(135deg,#8a5cff 0%,#f65bf9 100%)',
    cardGrad: 'linear-gradient(135deg,#8a5cff,#f65bf9)',
    word: 'Java<br>→ C++',
    gridWord: 'Java→C++',
    monoWord: true,
    heroHint: '// drop: pipeline graph diagram',
    cardHint: '// drop: pipeline graph',
    image: null,
    repo: 'https://github.com/tanyc-2003/Agentic-LLM-Transpilation-Pipeline-for-Java-to-Cpp-',
    overviewParas: [
      'An AI-powered pipeline that autonomously converts multi-file Java projects into modern, compilable C++17. Built on LangGraph, it runs as a stateful directed graph managing the full translation lifecycle.',
      'From dependency analysis and frozen-header synthesis, through LLM-driven translation, compiler validation, static analysis and self-correction, all the way to CMake build verification — the graph drives every stage and repairs its own output.'
    ],
    prereqGroups: [
      { label: 'Requirements', items: ['Python 3.10+', 'G++ compiler with C++17 support (on PATH)', 'OpenAI API key (.env)', 'clang-tidy — optional, lifetime/ODR analysis', 'cmake — optional, build verification'] }
    ],
    steps: [
      { title: 'Analyse & freeze', body: 'The graph parses the build system, builds a dependency graph, and synthesises + locks every .hpp interface before any .cpp is translated.' },
      { title: 'Translate with context', body: 'Each file is translated with an 8-layer context assembly: project brief, translation ledger, symbol registry, sibling headers and dual RAG indices.' },
      { title: 'Compile & correct', body: 'Every file is compiled with g++ -std=c++17; errors feed a two-tier correction loop — surgical patch, full regeneration, then semantic redesign.' },
      { title: 'Test', body: 'JUnit tests become Google Test suites; per-file test binaries run and any failures trigger automatic correction.' },
      { title: 'Build & report', body: 'A CMakeLists.txt is generated and verified with cmake configure + build, then a structured pipeline report is written.' }
    ],
    codeBlocks: [
      {
        label: 'Install',
        code: 'git clone https://github.com/tanyc-2003/Agentic-LLM-Transpilation-Pipeline-for-Java-to-Cpp-\ncd Agentic-LLM-Transpilation-Pipeline-for-Java-to-Cpp-\npip install -r requirements.txt\n\n# add your key to .env\necho "OPENAI_API_KEY=sk-..." > .env'
      },
      { label: 'Run — interactive wizard', code: 'python main.py' },
      {
        label: 'Run — CI / non-interactive',
        code: 'python main.py \\\n  --non-interactive \\\n  --input-dir ./java_project \\\n  --output-dir ./cpp_output \\\n  --model gpt-5 \\\n  --cheap-model gpt-5-mini'
      }
    ],
    commands: [],
    diagramLabel: '// pipeline graph: setup → freeze headers → translate loop → correction → build + report',
    results: 'Point it at a Java codebase and it emits a compilable, tested C++17 project — with frozen header contracts, ODR checks, a cost ledger and a full run report. Fully resumable across sessions.',
    downloads: [
      { label: 'GitHub repository', url: 'https://github.com/tanyc-2003/Agentic-LLM-Transpilation-Pipeline-for-Java-to-Cpp-' }
    ]
  }
];

const SKILLS = [
  { title: 'Robotics', items: ['Servo control', 'Kinematics', 'CAD', 'PCA9685'] },
  { title: 'Embedded / firmware', items: ['C / C++', 'Arduino', 'Sensors', 'Serial / BT'] },
  { title: 'Hardware / electronics', items: ['Power electronics', 'Ćuk converter', 'Sensing', 'PCB'] },
  { title: 'Signal processing / AI', items: ['I–V analysis', 'LangGraph', 'RAG', 'LLM pipelines'] },
  { title: 'Web / software', items: ['Python', 'JavaScript', 'HTML / CSS', 'Cloud dashboards'] }
];

const ABOUT = {
  facts: [
    ['discipline', 'EEE'],
    ['university', 'Southampton'],
    ['gender', 'Male'],
    ['age', '2X'],
    ['focus', 'robotics · embedded · AI']
  ],
  paras: [
    'Hi — I’m <strong>Tan Yi Cherng</strong>, an Electrical &amp; Electronic Engineering graduate and a lifelong technology enthusiast.',
    'I love designing, creating and producing things — both digital and hands-on. That ranges from walking robots and solar-measurement hardware to agentic AI tooling that writes and fixes its own code.',
    'I helped build the UoSM Robotics Club’s workshop quadruped, and worked on undergraduate research at the University of Southampton designing a low-cost, internet-enabled I–V curve tracer for solar PV modules.',
    'Most of all, I care about making projects that other people can actually rebuild — so I document the setup, wiring and step-by-step guides for everything you’ll find here.'
  ],
  likes: [
    '🦿 Robots &amp; mechatronics',
    '⚡ Power &amp; measurement hardware',
    '🤖 AI &amp; LLM tooling',
    '🛠 Tools people can rebuild'
  ]
};

const RESUME = {
  name: 'Tan Yi Cherng',
  role: 'Electrical & Electronic Engineering Student',
  contact: 'tanyicherng99@gmail.com · github.com/tanyc-2003 · linkedin.com/in/yi-cherng-tan',
  education: [
    { school: 'University of Southampton', degree: 'BEng Electrical & Electronic Engineering', date: '20XX – 20XX' }
  ],
  experience: [
    {
      role: 'Undergraduate Researcher',
      date: '20XX',
      org: 'University of Southampton · under Dr. Vun Jack',
      desc: 'Designed and implemented a portable, low-cost, internet-enabled I–V curve tracer using a Ćuk-converter electronic load, with cloud data upload and a web dashboard.'
    },
    {
      role: 'Member — UoSM Robotics Club',
      date: '20XX',
      org: null,
      desc: 'Built a Bluetooth-controlled quadruped robot for club workshops — Arduino + PCA9685 servo control, HC-06 comms and a CAD-designed body.'
    }
  ],
  selected: [
    { id: 'quadruped', label: 'Quadruped Walking Robot' },
    { id: 'ivtracer', label: 'Low-Cost I–V Curve Tracer' },
    { id: 'llmagent', label: 'Java → C++ Transpilation Agent' }
  ],
  skills: ['C / C++', 'Python', 'Arduino', 'Power electronics', 'LangGraph', 'CAD'],
  interests: 'Robotics · Embedded systems · Power electronics · AI & LLMs · Making & documentation',
  links: [
    { label: 'GitHub', url: 'https://github.com/tanyc-2003' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yi-cherng-tan/' },
    { label: 'Email', url: 'mailto:tanyicherng99@gmail.com' }
  ]
};

const CONTACT = [
  { icon: '@', iconClass: '', label: 'Email', value: 'tanyicherng99@gmail.com', valueBreak: true, url: 'mailto:tanyicherng99@gmail.com', external: false },
  { icon: 'GH', iconClass: 'contact-card__icon--mono', label: 'GitHub', value: '@tanyc-2003', url: 'https://github.com/tanyc-2003', external: true },
  { icon: 'in', iconClass: 'contact-card__icon--in', label: 'LinkedIn', value: 'yi-cherng-tan', url: 'https://www.linkedin.com/in/yi-cherng-tan/', external: true }
];
