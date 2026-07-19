/* Site content. Everything the pages render comes from here — edit this file
   to add a project or change copy; no template edits needed.

   Projects show a gradient placeholder panel until a real photo exists. Set
   `image` to a committed image path and it replaces that placeholder
   everywhere the project appears.

   `featured: true` puts a project on the home page as a large alternating
   card. Every project appears on the Projects page regardless. */

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
    featured: true,
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
    featured: true,
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
    featured: true,
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
  },
  {
    id: 'emgband',
    num: '04',
    cat: 'Wearables · Machine Learning',
    title: 'Finger Gesture Recognition Wristband',
    cardTitle: 'EMG Gesture Wristband',
    subtitle: 'A low-cost, 3-channel EMG wristband that classifies finger gestures from signals read at the wrist rather than the forearm.',
    cardDesc: 'A low-cost, 3-channel EMG wristband that classifies finger gestures from signals read at the wrist rather than the forearm.',
    gridDesc: 'Final-year project: a £150 3-channel sEMG wristband classifying finger gestures.',
    tags: ['EMG', 'MATLAB', 'ESP32', 'Machine learning'],
    cardTags: ['EMG', 'MATLAB', 'ESP32'],
    grad: 'linear-gradient(135deg,#2e80ff 0%,#7b5cff 100%)',
    cardGrad: 'linear-gradient(135deg,#2e80ff,#7b5cff)',
    word: 'EMG',
    gridWord: 'EMG Band',
    monoWord: false,
    heroHint: '// drop: wristband on wrist + gesture set',
    cardHint: '// drop: wristband photo',
    image: null,
    repo: 'https://github.com/tanyc-2003/Low-Cost-Wearable-User-Independent-Finger-Gesture-Recognition-Wristband',
    overviewParas: [
      'My final-year MEng project at the University of Southampton (2024/25), supervised by Prof. Chris Freeman. Commercial EMG gesture armbands are expensive, use four or more sensors, and sit on the forearm — this asks whether a cheaper, smaller wristband can do the same job.',
      'The prototype reads surface EMG from three dry electrodes at the wrist, closer to the tendons than the muscle bellies, on an ESP32 and within a £150 budget. Signals are windowed, feature-extracted (MODWT energy and standard deviation, MAV, variance, kurtosis, skewness) and classified with kNN, SVM, LDA and a deep neural network in MATLAB.',
      'The interesting question is user independence: whether a model trained on one set of people generalises to someone it has never seen.'
    ],
    prereqGroups: [
      { label: 'Hardware', items: ['ESP32-DevKitC V4 (3 × 12-bit ADC)', '3 × DFRobot SEN0240 dry sEMG sensors', 'Adafruit USB isolator', 'Wristband housing'] },
      { label: 'Software', items: ['Arduino IDE', 'Python 3 (serial capture)', 'MATLAB + Statistics & ML Toolbox'] }
    ],
    steps: [
      { title: 'Place the electrodes', body: 'Fit the three dry electrodes around the wrist — two anterior, one posterior — and connect the USB isolator between the board and the PC to cut mains noise.' },
      { title: 'Acquire', body: 'Flash the firmware from ARDUINO/EMGRecorder_multi_sensor to sample all three channels at 500 Hz and stream them over UART.' },
      { title: 'Record', body: 'Run the Python capture scripts to read the serial stream, cut it into 0.5 s windows with 20% overlap, and save per-gesture .mat files.' },
      { title: 'Extract & train', body: 'In MATLAB, extract the MODWT, time-domain and statistical features, then train kNN, SVM, LDA and DNN classifiers under 5×2 cross-validation.' },
      { title: 'Predict live', body: 'Load the trained SVM in MATLAB/Real Time/realTimeSVMprediction.m to classify gestures live from the wristband over UART.' }
    ],
    codeBlocks: [],
    commands: [],
    diagramTitle: 'Signal chain',
    diagramLabel: '// signal chain: 3× dry sEMG → ESP32 ADC @500Hz → UART → windowing → features → classifier',
    results: 'On four gestures the wristband reached 99.35% accuracy for a single known user (linear SVM), but 69.38% user-independent (RBF SVM) — the generalisation gap is the real finding. Dry metallic electrodes beat the wet MyoWare 2.0 sensor, wrist acquisition matched forearm accuracy, and a 0.5 s window gave the best latency/accuracy trade-off. Stretching to seven gestures dropped accuracy to 75.14% individual and 44.03% user-independent.',
    downloads: [
      { label: 'GitHub repository', url: 'https://github.com/tanyc-2003/Low-Cost-Wearable-User-Independent-Finger-Gesture-Recognition-Wristband' },
      { label: 'Full project report (PDF)', url: 'https://github.com/tanyc-2003/Low-Cost-Wearable-User-Independent-Finger-Gesture-Recognition-Wristband/blob/main/Full_report.pdf' }
    ]
  },
  {
    id: 'argus',
    num: '05',
    cat: 'Data Engineering · Python',
    title: 'ARGUS — Point-in-Time Market Data',
    cardTitle: 'ARGUS Data Platform',
    subtitle: 'A minimum-cost, point-in-time-correct market-data platform built entirely on free sources.',
    cardDesc: 'A point-in-time-correct market data pipeline on free sources — cross-source voting, bitemporal history and sealed nightly snapshots.',
    gridDesc: 'Point-in-time-correct market data pipeline built entirely on free sources.',
    tags: ['Python', 'DuckDB', 'Parquet', 'Data pipeline'],
    cardTags: ['Python', 'DuckDB', 'Parquet'],
    grad: 'linear-gradient(135deg,#2e80ff 0%,#f65bf9 100%)',
    cardGrad: 'linear-gradient(135deg,#2e80ff,#f65bf9)',
    word: 'ARGUS',
    gridWord: 'ARGUS',
    monoWord: false,
    heroHint: '// drop: pipeline diagram or gap-ledger screenshot',
    cardHint: '// drop: pipeline diagram',
    image: null,
    repo: 'https://github.com/tanyc-2003/ARGUS',
    overviewParas: [
      'ARGUS captures US equity market data from free sources, reconciles it across providers, adjusts it for corporate actions without look-ahead, and publishes a sealed, contract-checked DuckDB database any downstream tool can read.',
      'The design goal is honesty about data quality. Every daily bar is voted on across yfinance, Alpaca IEX and Stooq, then graded good, degraded or quarantined — conflicting bars are never served. A published gap ledger states exactly what free data cannot buy, with a severity per gap, rather than papering over the holes.',
      'Point-in-time correctness is the core guarantee: a value served for a past date can never change because of a later split or dividend, and the system can explain any value factor by factor.'
    ],
    prereqGroups: [
      { label: 'Requirements', items: ['Python 3.11+ (developed against 3.14)', 'A local disk outside any cloud-sync folder', 'Free API keys — blank keys skip a job rather than fail it'] }
    ],
    steps: [
      { title: 'Configure', body: 'Copy .env.example to .env and fill in whatever free API keys you have; a blank key makes that job skip instead of failing.' },
      { title: 'Set up', body: 'Run scripts/setup_argus.bat with a data root. It creates the venv, installs the package and initialises the database — and refuses a OneDrive or Dropbox path, since Parquet and DuckDB under a sync client risk corruption.' },
      { title: 'Choose the universe', body: 'Edit config/universe.yaml — the daily spine, shipping with 10 macro ETFs and 102 S&P 100 constituents. Adding a ticker triggers a one-off deep backfill on the next run.' },
      { title: 'Run nightly', body: 'Register the scheduled task, or run argus nightly by hand: calendar gate, capture, build, vote, publish — idempotent per trade date.' },
      { title: 'Read the data', body: 'Point a read-only DuckDB connection at argus_serving.duckdb and query the frozen published views.' }
    ],
    codeBlocks: [
      {
        label: 'Set up (Windows)',
        code: 'copy .env.example .env          # blank keys mean a job SKIPS, not fails\n\n.\\scripts\\setup_argus.bat D:\\argus-data\n\n.\\scripts\\register_scheduled_tasks.ps1 ^\n  -ArgusExe D:\\argus-data\\venv\\Scripts\\argus.exe'
      },
      {
        label: 'Read the sealed serving database',
        code: 'import duckdb\n\ncon = duckdb.connect("D:/argus-data/argus_serving.duckdb", read_only=True)\n\ncon.execute("""\n    SELECT * FROM vw_mad_daily_ohlcv\n    WHERE ticker = \'AAPL\'\n    ORDER BY effective_date\n""").pl()\n\n# what the free data cannot buy\ncon.execute("SELECT gap_key, metric, severity FROM gap_ledger").pl()'
      },
      {
        label: 'CLI',
        code: 'argus check       # env sanity: data root, keys, latest session\nargus nightly     # capture -> build -> vote -> publish (idempotent)\nargus rebuild --yes                # replay deterministically from L2\nargus verify-pit --ticker AAPL --date 2020-08-28   # full audit trail'
      }
    ],
    commands: [],
    diagramTitle: 'Architecture',
    diagramLabel: '// free sources → L0 landing (append-only) → L2 events (system of record) → vote + SCD-2 → canonical DuckDB → PIT serving views → contract gate → argus_serving.duckdb',
    results: 'The published tables form a frozen, additive-only contract, schema-checked in CI and again inside the nightly publish, so a regression fails inside ARGUS and can never reach a consumer. The DuckDB build file is disposable — argus rebuild deterministically regenerates it by replaying the event store.',
    downloads: [
      { label: 'GitHub repository', url: 'https://github.com/tanyc-2003/ARGUS' },
      { label: 'Architecture & serving contract docs', url: 'https://github.com/tanyc-2003/ARGUS/tree/main/docs' }
    ]
  },
  {
    id: 'advisory',
    num: '06',
    cat: 'Quantitative · Data Science',
    title: 'Market Advisory Dashboard',
    subtitle: 'A statistically-disciplined market-intelligence dashboard where no output is shown until it passes a validation gate.',
    cardDesc: 'A market-intelligence dashboard with regime detection, historical analogs and tail-aware sizing — every output gated behind statistical validation.',
    gridDesc: 'Regime detection, historical analogs and tail-aware sizing, all gated behind validation.',
    tags: ['Python', 'React', 'DuckDB', 'Statistics'],
    cardTags: ['Python', 'React', 'Statistics'],
    grad: 'linear-gradient(135deg,#8a5cff 0%,#f65bf9 100%)',
    cardGrad: 'linear-gradient(135deg,#8a5cff,#f65bf9)',
    word: 'Signal',
    gridWord: 'Advisory',
    monoWord: false,
    heroHint: '// drop: dashboard screenshot',
    cardHint: '// drop: dashboard screenshot',
    image: null,
    repo: 'https://github.com/tanyc-2003/Market-Advisory-Dashboard',
    overviewParas: [
      'A local-first dashboard that turns market data into honest evidence about evidence. It reports where the market is now via a Winsorised Hidden Markov Model, what history says through a Mahalanobis analog engine, what is driving each name via interventional SHAP attribution, and what you would be sizing into with tail-aware Kelly diagnostics.',
      'One rule governs everything: no layer’s result counts as evidence until the validation layer has signed it off. The dashboard refuses to render an output without a passing report, and a positive walk-forward Sharpe is not enough on its own — the Deflated Sharpe Ratio applies a trial-count penalty drawn from a monotonic audit log, so nobody can pretend they ran fewer experiments than they did.',
      'It deliberately does not execute trades, recommend position sizes, or generate deterministic buy/sell signals. Those restrictions are architectural rather than cultural — the system is built to make over-confidence harder, not to make decisions.'
    ],
    prereqGroups: [
      { label: 'Requirements', items: ['Python 3.11+ (developed against 3.14)', 'Node 18+ for the React frontend', 'No API key needed — free yfinance, FRED and CBOE data'] }
    ],
    steps: [
      { title: 'Install', body: 'Create a virtual environment and install the package with its dev extras.' },
      { title: 'Bootstrap the databases', body: 'Run scripts/bootstrap_db.py to create main.duckdb and audit.duckdb.' },
      { title: 'Seed data', body: 'Choose one path — a deterministic synthetic universe needing no network, or real OHLCV and macro data from yfinance and FRED.' },
      { title: 'Validate', body: 'Run scripts/run_validation.py to populate the validation reports. Until you do, every layer shows no_report and the UI stays gated — that is the intended default.' },
      { title: 'Launch a UI', body: 'Start the FastAPI backend and the React frontend, or fall back to the legacy Streamlit app over the same backend.' }
    ],
    codeBlocks: [
      {
        label: 'Set up',
        code: 'py -3.14 -m venv .venv\n.\\.venv\\Scripts\\activate\n\npip install -e ".[dev]"\ncp .env.example .env\n\npython scripts/bootstrap_db.py     # main.duckdb + audit.duckdb\npython scripts/ingest_real_data.py # or seed_synthetic_data.py\npython scripts/run_validation.py   # REQUIRED before the UI ungates'
      },
      {
        label: 'Run the React app',
        code: 'pip install -e ".[api]"\npython scripts/run_api.py          # FastAPI on :8000\n\n# second terminal\ncd frontend && npm install && npm run dev   # Vite on :5173'
      }
    ],
    commands: [],
    diagramTitle: 'Architecture',
    diagramLabel: '// every layer output → Layer 0 validation gate (walk-forward + Deflated Sharpe vs trial log) → rendered, or withheld as no_report',
    results: 'Six views — Overview, Track record, Portfolio, Journal, Calibration and Validation — load from a single API round trip. The system grades its own calls against realised forward returns, monitors input freshness per feed, and keeps a decision change-log with rationale. A second probabilistic forecaster is wired in but stays hidden because it has not passed the gate.',
    downloads: [
      { label: 'GitHub repository', url: 'https://github.com/tanyc-2003/Market-Advisory-Dashboard' },
      { label: 'Documentation', url: 'https://github.com/tanyc-2003/Market-Advisory-Dashboard/tree/main/docs' }
    ]
  },
  // NOTE: the Team-C-Smart-Meter-Web repo has a Firebase service-account
  // private key committed at its root. Revoke and rotate the key, then purge
  // it from that repo's history — deleting the file alone does not revoke it.
  {
    id: 'smartmeter',
    num: '07',
    cat: 'Web · IoT',
    title: 'Smart Meter Dashboard & Chatbot',
    subtitle: 'A Flask web app for monitoring and controlling a smart meter, with a conversational assistant over the readings.',
    cardDesc: 'A Flask web app for monitoring and controlling a smart meter, with a conversational assistant over the live readings.',
    gridDesc: 'Team web app for smart-meter control, with Firebase storage and a chatbot.',
    tags: ['Flask', 'Firebase', 'OpenAI', 'Team project'],
    cardTags: ['Flask', 'Firebase', 'OpenAI'],
    grad: 'linear-gradient(135deg,#2e80ff 0%,#7b5cff 100%)',
    cardGrad: 'linear-gradient(135deg,#2e80ff,#7b5cff)',
    word: 'Meter',
    gridWord: 'Smart Meter',
    monoWord: false,
    heroHint: '// drop: dashboard screenshot',
    cardHint: '// drop: dashboard screenshot',
    image: null,
    repo: 'https://github.com/tanyc-2003/Team-C-Smart-Meter-Web',
    overviewParas: [
      'A team web interface for a smart electricity meter, built as the Team C group project. The Flask backend serves a browser dashboard, persists meter readings to Firebase Firestore, and exposes a JSON API the front end polls for live values.',
      'Alongside the readings sits a chatbot layer wired to the OpenAI API, so the meter data can be asked about in plain language rather than only read off a chart.'
    ],
    prereqGroups: [
      { label: 'Requirements', items: ['Python 3 with the requirements.txt dependencies', 'A Firebase project with Firestore enabled', 'Service-account credentials, supplied via environment', 'An OpenAI API key in .env'] }
    ],
    steps: [
      { title: 'Install', body: 'Install the Python dependencies, or run install_win.bat on Windows.' },
      { title: 'Connect Firebase', body: 'Point the Firebase Admin SDK at your own service-account credentials and enable the Smart-Meter-Data Firestore collection.' },
      { title: 'Add the API key', body: 'Put your OpenAI key in .env as OPENAI_API_KEY — the app loads it at start-up for the chatbot.' },
      { title: 'Run the server', body: 'Start app.py (or run_win.bat) and open the dashboard in a browser; a procfile and runtime.txt are included for hosted deployment.' }
    ],
    codeBlocks: [
      {
        label: 'Run locally',
        code: 'pip install -r requirements.txt\n\n# supply your own Firebase credentials and OpenAI key\necho "OPENAI_API_KEY=sk-..." > .env\n\npython app.py       # or: run_win.bat'
      }
    ],
    commands: [],
    diagramTitle: 'Architecture',
    diagramLabel: '// smart meter → Flask API → Firebase Firestore → browser dashboard + OpenAI chatbot',
    results: 'The dashboard renders live meter readings from Firestore and answers plain-language questions about them through the chatbot, with the Flask app packaged for hosted deployment.',
    downloads: [
      { label: 'GitHub repository', url: 'https://github.com/tanyc-2003/Team-C-Smart-Meter-Web' }
    ]
  },
  {
    id: 'dustbin',
    num: '08',
    cat: 'Robotics · Workshop',
    title: 'Smart Recycling Dustbin',
    subtitle: 'An automatic dustbin built from recycled materials for the UoSM Robotics Club recycling workshop.',
    cardDesc: 'An automatic dustbin built from recycled materials for the UoSM Robotics Club recycling campaign workshop.',
    gridDesc: 'Ultrasonic-triggered automatic bin lid, built from recycled materials for a club workshop.',
    tags: ['Arduino', 'HC-SR04', 'Servo', 'Workshop'],
    cardTags: ['Arduino', 'HC-SR04', 'Servo'],
    grad: 'linear-gradient(135deg,#2e80ff 0%,#f65bf9 100%)',
    cardGrad: 'linear-gradient(135deg,#2e80ff,#f65bf9)',
    word: 'Bin',
    gridWord: 'Smart Bin',
    monoWord: false,
    heroHint: '// drop: finished dustbin photo',
    cardHint: '// drop: dustbin photo',
    image: null,
    repo: 'https://github.com/tanyc-2003/UoSM-Robotics-Club-Smart-Dustbin-24-25',
    overviewParas: [
      'A UoSM Robotics Club workshop run in 2024/25 with the Students’ Association to promote the recycling campaign. An ultrasonic sensor detects a nearby hand and a servo lifts the lid, so nobody has to touch the bin.',
      'The build is deliberately simple and cheap: the body and lid are made from recycled materials, and the electronics are an Arduino, one sensor and one servo — enough for a beginner-friendly session with a working robot at the end.'
    ],
    prereqGroups: [
      { label: 'Hardware', items: ['Arduino Uno / Maker Uno', 'SG90 servo motor', 'HC-SR04 ultrasonic sensor', 'Breadboard and jumper wires', 'Recycled materials for the body and lid'] },
      { label: 'Software', items: ['Arduino IDE', 'Servo library'] }
    ],
    steps: [
      { title: 'Build the body', body: 'Assemble the dustbin structure from recycled material and mount the electronics on it.' },
      { title: 'Power the breadboard', body: 'Connect the breadboard power rails to 5V and GND.' },
      { title: 'Wire the ultrasonic sensor', body: 'VCC to 5V, GND to GND, TRIG to A5 and ECHO to A4.' },
      { title: 'Wire the servo', body: 'VCC to 5V, GND to GND and the control wire to pin 13.' },
      { title: 'Upload', body: 'Install the Servo library if needed, then upload Recycle_Bot_code/Recycle_Bot_code.ino to the board.' },
      { title: 'Test', body: 'Keep the lid clear, then move a hand within about 10 cm of the sensor — the lid should lift, and close again once you move away.' }
    ],
    codeBlocks: [],
    commands: [],
    diagramLabel: '// wiring: HC-SR04 TRIG→A5, ECHO→A4 · servo signal→pin 13 · both on 5V / GND',
    results: 'The lid stays open while an object sits within roughly 10 cm of the sensor and closes once it clears. If the movement is unreliable, the usual cause is a weak USB port — the servo draws more current than some can supply, so a stable 5V source fixes it.',
    downloads: [
      { label: 'GitHub repository', url: 'https://github.com/tanyc-2003/UoSM-Robotics-Club-Smart-Dustbin-24-25' },
      { label: 'Participant guide (PDF)', url: 'https://github.com/tanyc-2003/UoSM-Robotics-Club-Smart-Dustbin-24-25/blob/main/Participant%20Guide%20-%20Recycle%20Bot%20.pdf' }
    ]
  }
];

// Home-page "Skills & tools", grouped by domain rather than by tool type —
// the résumé groups the same ground by category instead. Keep these honest:
// every entry should be traceable to a project or a role on this site.
const SKILLS = [
  {
    title: 'Robotics & mechatronics',
    items: ['Servo control', 'Kinematics', 'PCA9685', 'SolidWorks CAD', '3D printing', 'Laser cutting']
  },
  {
    title: 'Embedded / firmware',
    items: ['C / C++', 'Arduino', 'ESP32', 'Raspberry Pi', 'FreeRTOS', 'Sensors', 'Serial / Bluetooth']
  },
  {
    title: 'Hardware / electronics',
    items: ['Power electronics', 'Ćuk converter', 'PCB design', 'Circuit design', 'EAGLE CAD', 'Sensing']
  },
  {
    title: 'IC & digital design',
    items: ['Digital IC design', 'VLSI', 'Layout design', 'SystemVerilog', 'FPGA', 'ModelSim']
  },
  {
    title: 'Signal processing & ML',
    items: ['EMG / biosignals', 'Feature extraction', 'SVM · kNN · DNN', 'MATLAB / Simulink', 'I–V analysis']
  },
  {
    title: 'Software, web & data',
    items: ['Python', 'JavaScript', 'HTML / CSS', 'Flask', 'React', 'LangGraph', 'RAG / LLM pipelines', 'DuckDB', 'Firebase']
  }
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
    { id: 'emgband', label: 'EMG Finger Gesture Wristband (final-year project)' },
    { id: 'quadruped', label: 'Quadruped Walking Robot' },
    { id: 'ivtracer', label: 'Low-Cost I–V Curve Tracer' },
    { id: 'llmagent', label: 'Java → C++ Transpilation Agent' },
    { id: 'argus', label: 'ARGUS — Point-in-Time Market Data Platform' }
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
