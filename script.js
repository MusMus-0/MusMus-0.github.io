const PORTFOLIO = {
  name: "Muhammad Musa",
  initials: "MM",
  role: "Software Engineer",
  tagline:
    "Software engineer passionate about AI, with a background in machine learning, LLM evaluation and retrieval systems, built on a strong foundation in systems and cloud engineering.",
  availability: "Open to software engineering roles",

  // Shown in the card on the right of the hero
  quickFacts: [
    { label: "Based in", value: "Oshawa, Ontario" },
    { label: "Degree", value: "B.Eng. Software Engineering, Highest Distinction" },
    { label: "Focus", value: "Artificial intelligence" },
    { label: "Currently", value: "LLM evaluation at Outlier.ai" },
  ],

  about: [
    "I'm a software engineer with a real passion for artificial intelligence. I graduated from Ontario Tech University with a Bachelor of Engineering in Software Engineering and Highest Distinction, and I've spent the past few years working with large language models every day.",
    "What draws me to AI is how quickly it's changing what software can do. I enjoy understanding how these models behave, finding where they go wrong, and building tools that make them more useful and reliable.",
    "My background in AI, systems, cloud and embedded engineering gives me a solid base for that work, and I'm always looking for the next problem where AI can make a real difference.",
  ],

  stats: [
    { value: "4.12", label: "CGPA" },
    { value: "2+", label: "Years working with LLMs" },
    { value: "4", label: "Cloud & AI certifications" },
    { value: "15", label: "Projects built" },
  ],

  skills: [
    {
      group: "Languages",
      items: ["C / C++", "Python", "Bash", "SQL", "Perl", "Java", "JavaScript"],
    },
    {
      group: "Systems, Hardware & Test",
      items: [
        "Linux",
        "System-level debugging",
        "Multithreading & concurrency",
        "Computer architecture",
        "Embedded firmware (GPIO / registers)",
        "Performance & power analysis",
        "Test automation",
        "Fault injection",
        "GDB",
      ],
    },
    {
      group: "GPU & AI-Native Development",
      items: [
        "GPU computing (ROCm / CUDA, OpenCL)",
        "Agent-based coding (Claude Code, Codex)",
        "AI-assisted debugging",
        "RAG",
        "LLM evaluation / RLHF",
        "MCP",
      ],
    },
    {
      group: "Tools",
      items: ["Git", "Jira", "Agile / Scrum", "Docker", "PostgreSQL / MySQL", "Grafana"],
    },
  ],

  projects: [
    {
      title: "PodNet: Autonomous Pod Transit Simulation",
      category: "Systems",
      course: "Capstone",
      year: "2026",
      team: "",
      grade: "",
      description:
        "My capstone: a personal rapid transit simulation of 30 autonomous pods running on a rail network across Oshawa, Ontario. A Python dispatcher drives SUMO in real time through TraCI, sends the closest free pod to each ride request, forms multi-pod platoons for group trips, and reroutes around simulated blockages. Riders request trips from a CLI or a Flutter Android app over a Flask bridge, and each session ends with a KPI report on trip times, fleet utilisation and roundabout throughput.",
      tags: ["Python", "SUMO / TraCI", "Flask", "Flutter", "Multithreading"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "CiteSeeker",
      category: "AI & ML",
      course: "Personal project",
      year: "",
      team: "",
      grade: "",
      description:
        "A hybrid retrieval pipeline (dense embeddings + BM25 with cross-encoder reranking) that answers questions with 90%+ citation accuracy at under 800ms p95 latency. Includes a RAGAS evaluation harness wired into CI to catch retrieval regressions automatically.",
      tags: ["Python", "FastAPI", "pgvector", "RAGAS", "Docker", "Claude Code"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "Driving Scenario Extraction on Google Cloud",
      category: "Cloud & Distributed",
      course: "Cloud Computing",
      year: "2026",
      team: "Team of 4",
      grade: "",
      description:
        "Extracts labelled 5-second driving scenarios (car-following, lane changes and more) from NGSIM US-101 trajectory data sampled at 10 Hz. Built first as a containerized monolith on GKE, then redesigned as six event-driven microservices for ingestion, preprocessing, detection, segmentation, validation plots and reporting, connected through Pub/Sub with Cloud Storage for data.",
      tags: ["Python", "GCP", "Kubernetes (GKE)", "Docker", "Pub/Sub", "Microservices"],
      image: "",
      live: "",
      code: "https://github.com/musscc0/Cloud-Computing-Phase-2",
    },
    {
      title: "Heart Disease Risk Prediction",
      category: "AI & ML",
      course: "Machine Learning & Data Mining",
      year: "2026",
      team: "Team of 4",
      grade: "",
      description:
        "Predicts heart attack risk from 445K CDC BRFSS survey records. Compared Logistic Regression, KNN and Gaussian Naive Bayes under severe class imbalance; balanced Logistic Regression scored best at 0.889 ROC-AUC. Also tested how well models trained on 2022 data generalize to the 2015 survey.",
      tags: ["Python", "scikit-learn", "pandas", "Jupyter"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "Secure SAML Single Sign-On",
      category: "Security",
      course: "Software & Computer Security",
      year: "2026",
      team: "Team of 4",
      grade: "",
      description:
        "A SAML 2.0 service provider that validates every assertion before creating a session: signature, issuer, audience, recipient and timestamps. Blocks replayed assertions with an expiring ID cache, maps identity attributes to roles, and ships with automated tests that prove forged and expired logins are rejected.",
      tags: ["Python", "FastAPI", "SAML 2.0", "pytest"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "Decentralized Autonomous Taxi Fleet",
      category: "Cloud & Distributed",
      course: "Distributed Systems",
      year: "2025",
      team: "Team of 4",
      grade: "",
      description:
        "A taxi fleet that assigns rides with no central dispatcher. Taxis bid on ride requests over UDP broadcast and the best offer wins after a short auction window. Taxis path around building obstacles with BFS on a 16×16 grid, failed rides are retried or reissued when a taxi dies, and a Pygame visualizer shows the whole city live.",
      tags: ["Python", "UDP sockets", "Pygame", "BFS"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "TrailQuest",
      category: "Web & Mobile",
      course: "Mobile App Development",
      year: "2025",
      team: "Team of 4",
      grade: "",
      description:
        "A location-based challenge app for Android. Creators drop checkpoints on a Google Map, and participants check in when their GPS location is inside each checkpoint's radius. Includes login and signup, profiles, and active challenge tracking, with data stored in SQLite.",
      tags: ["Kotlin", "Android", "Google Maps SDK", "SQLite"],
      image: "",
      live: "",
      code: "https://github.com/NormalLight/TrailQuest",
    },
    {
      title: "Custom Unix Shell & Process Scheduler",
      category: "Systems",
      course: "",
      year: "",
      team: "",
      grade: "",
      description:
        "A Unix-style shell in C built on fork, exec, wait, pipe and dup2, with I/O redirection and pipelines. Adds a multi-policy scheduler (round-robin, priority, MLFQ) and a multithreaded resource coordinator, with zero memory leaks under Valgrind and no race conditions in stress tests.",
      tags: ["C", "Linux", "POSIX syscalls", "GDB", "Valgrind"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "Microcontroller Firmware & Digital Logic",
      category: "Systems",
      course: "",
      year: "",
      team: "",
      grade: "",
      description:
        "Bare-metal C firmware driving registers, GPIO, timers, UART and ADC directly, validated on a logic analyzer during board bring-up. Also designed and tested digital logic for memory, datapaths and processor organization against expected waveforms.",
      tags: ["C", "ARM Cortex-M", "GPIO / Registers", "Logic Analyzer"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "Virtual Networks & Packet Analysis",
      category: "Systems",
      course: "Computer Networks",
      year: "2025",
      team: "Team of 5",
      grade: "",
      description:
        "Built a bridged virtual network of Ubuntu VMs in VirtualBox, then wrote and tested TCP and UDP client/server programs across it and analyzed the resulting traffic packet by packet.",
      tags: ["Linux", "VirtualBox", "TCP / UDP", "Packet analysis"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "Linux System Monitoring & Alerting",
      category: "Systems",
      course: "Systems Programming",
      year: "2024",
      team: "Team of 3",
      grade: "",
      description:
        "A Bash tool that watches CPU, memory, disk, network activity, syslog and chosen services, and emails an alert when a threshold is crossed or a service goes down. Thresholds, services and the cron schedule are all set from command-line arguments.",
      tags: ["Bash", "Linux", "cron"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "The Movie Matrix",
      category: "Web & Mobile",
      course: "Data Management Systems",
      year: "2024",
      team: "Team of 5",
      grade: "",
      description:
        "A movie and TV database web app with a MySQL schema designed from an ER model, a PHP back end, and live trending data from the TMDB API. Users sign in securely, search titles and people, write reviews, and get personalized recommendations.",
      tags: ["MySQL", "PHP", "JavaScript", "HTML / CSS", "TMDB API"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "War Card Game Simulator",
      category: "Systems",
      course: "Data Structures",
      year: "2024",
      team: "",
      grade: "",
      description:
        "A Java simulation of the card game War. Handles chained wars, the tie case when a player runs out mid-war, and decks of up to 999 cards, and reports the winner and number of rounds.",
      tags: ["Java", "Data Structures"],
      image: "",
      live: "",
      code: "",
    },
    {
      title: "EZGamez",
      category: "Web & Mobile",
      course: "Web Development",
      year: "2023",
      team: "Team project",
      grade: "",
      description:
        "A small browser arcade site with three games written from scratch on HTML canvas: Snake, Brick Breaker and Connect 4.",
      tags: ["JavaScript", "HTML Canvas", "CSS"],
      image: "",
      live: "",
      code: "",
    },
  ],

  certifications: [
    { title: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: "", credentialId: "", url: "", file: "certs/aws-solutions-architect.pdf" },
    { title: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", date: "", credentialId: "", url: "", file: "certs/aws-ai-practitioner.pdf" },
    { title: "Google Cloud Generative AI Leader", issuer: "Google Cloud", date: "", credentialId: "", url: "", file: "certs/google-gen-ai-leader.pdf" },
    { title: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft", date: "", credentialId: "", url: "", file: "certs/microsoft-azure-ai-fundamentals.pdf" },
  ],

  experience: [
    {
      when: "Sep 2024 — Present",
      title: "Programming Data Annotator (LLM Evaluation)",
      where: "Outlier.ai · Remote",
      points: [
        "Evaluated 1,200+ LLM and agentic tool-use responses in an RLHF pipeline, applying standardized rubrics that raised inter-rater agreement to 95% and fed reward-model training.",
        "Debugged and corrected code-generation outputs across Python, C++ and 3+ other languages, writing root-cause reasoning and structured feedback that cut recurring code defects in sampled outputs by 30%.",
      ],
    },
    {
      when: "Mar 2025 — Aug 2025",
      title: "Sensor Data Processing Developer",
      where: "Autonomous Drive Club, Ontario Tech University",
      points: [
        "Built Python pipelines (NumPy, Open3D) converting raw LiDAR point clouds of 10K+ points per frame into 3D occupancy grids for real-time object detection and mapping at 10Hz.",
        "Tuned region-of-interest and height thresholds to cut per-frame compute by 40% with minimal accuracy loss, and added automated regression checks over logged drive data.",
        "Integrated the perception module with downstream mapping across a 6-member cross-functional team using Agile workflows.",
      ],
    },
    {
      when: "May 2024 — May 2026",
      title: "Facilities & Technical Support Assistant",
      where: "Ontario Tech University",
      points: [
        "Diagnosed hardware, AV and network faults across campus labs, resolving 90%+ of tickets on first contact.",
        "Coordinated a 5-person team and restructured scheduling, reducing equipment downtime by 25%.",
      ],
    },
    {
      when: "Sep 2022 — May 2026",
      title: "B.Eng. Software Engineering — Highest Distinction",
      where: "Ontario Tech University · CGPA 4.12",
      points: [
        "Coursework: Computer Architecture, Systems Programming, Operating Systems, Embedded Systems, Computer Networks, Data Structures, Design & Analysis of Algorithms.",
      ],
    },
  ],

  contactNote:
    "I'm looking for software engineering roles in systems, embedded or AI infrastructure. Reach out by email or LinkedIn.",
  email: "muhammad004musa@gmail.com",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-m-8bb033333" },
    { label: "Resume (PDF)", url: "resume.pdf" },
    // { label: "GitHub", url: "https://github.com/your-username" },
  ],
};





const $ = (sel) => document.querySelector(sel);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function initialsOf(text) {
  return text.split(/\s+/).filter((w) => /[A-Za-z]/.test(w[0])).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function render() {
  const p = PORTFOLIO;
  const year = new Date().getFullYear();

  document.title = `${p.name} — Portfolio`;
  $("#logo").textContent = p.initials;
  $("#availability").textContent = p.availability;
  $("#heroName").textContent = p.name;
  $("#heroRole").textContent = p.role;
  $("#heroTagline").textContent = p.tagline;
  $("#specYear").textContent = `REV. ${year}`;
  $("#footerYear").textContent = year;
  $("#footerName").textContent = p.name;
  $("#contactNote").textContent = p.contactNote;

  $("#quickFacts").innerHTML = p.quickFacts
    .map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`)
    .join("");

  $("#aboutText").innerHTML = p.about.map((t) => `<p>${esc(t)}</p>`).join("");

  $("#stats").innerHTML = p.stats
    .map((s) => `<li><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`)
    .join("");

  $("#skillGroups").innerHTML = p.skills
    .map(
      (g) => `
      <div class="skill-group reveal">
        <h3>${esc(g.group)}</h3>
        <ul class="chips">${g.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  renderFilters();
  renderProjects("All");

  $("#certList").innerHTML = p.certifications
    .map(
      (c, i) => `
      <article class="cert reveal${c.file ? " has-file" : ""}">
        <div class="seal" aria-hidden="true">${esc(initialsOf(c.issuer))}</div>
        <div class="cert-body">
          <h3>${c.file
            ? `<button type="button" class="cert-open" data-cert="${i}">${esc(c.title)}</button>`
            : esc(c.title)}</h3>
          <span class="issuer">${esc(c.issuer)}${c.date ? ` · ${esc(c.date)}` : ""}</span>
          ${c.credentialId ? `<span class="cred">ID: ${esc(c.credentialId)}</span>` : ""}
          <div class="cert-links">
            ${c.file ? `<span class="view-hint">View certificate</span>` : ""}
            ${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener">Verify credential →</a>` : ""}
          </div>
        </div>
      </article>`
    )
    .join("");

  $("#timeline").innerHTML = p.experience
    .map(
      (e) => `
      <li class="reveal">
        <span class="when">${esc(e.when)}</span>
        <h3>${esc(e.title)}</h3>
        <span class="where">${esc(e.where)}</span>
        ${e.points && e.points.length ? `<ul class="points">${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>` : ""}
      </li>`
    )
    .join("");

  const email = $("#emailLink");
  email.textContent = p.email;
  email.href = `mailto:${p.email}`;

  $("#socials").innerHTML = p.socials
    .map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`)
    .join("");
}

function renderFilters() {
  const tags = ["All", ...new Set(PORTFOLIO.projects.map((pr) => pr.category).filter(Boolean))];
  const bar = $("#projectFilters");
  bar.innerHTML = tags
    .map((t) => `<button class="filter" type="button" data-tag="${esc(t)}" aria-pressed="${t === "All"}">${esc(t)}</button>`)
    .join("");
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter");
    if (!btn) return;
    bar.querySelectorAll(".filter").forEach((b) => b.setAttribute("aria-pressed", b === btn));
    renderProjects(btn.dataset.tag);
  });
}

function renderProjects(tag) {
  const list = PORTFOLIO.projects.filter((pr) => tag === "All" || pr.category === tag);
  $("#projectList").innerHTML = list
    .map(
      (pr) => `
      <article class="project">
        <div class="project-thumb">
          ${pr.image
            ? `<img src="${esc(pr.image)}" alt="Screenshot of ${esc(pr.title)}" loading="lazy">`
            : `<span class="initials">${esc(initialsOf(pr.title))}</span>`}
        </div>
        <div class="project-body">
          <div class="project-meta mono"><span>${esc(pr.course || pr.category || "")}</span><span>${esc(pr.year || "")}</span></div>
          <h3>${esc(pr.title)}</h3>
          ${pr.team || pr.grade ? `<div class="badges">${pr.team ? `<span class="badge">${esc(pr.team)}</span>` : ""}${pr.grade ? `<span class="badge grade">Grade ${esc(pr.grade)}</span>` : ""}</div>` : ""}
          <p>${esc(pr.description)}</p>
          <div class="tags">${pr.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          ${pr.live || pr.code ? `<div class="project-links">
            ${pr.live ? `<a href="${esc(pr.live)}" target="_blank" rel="noopener">Live demo ↗</a>` : ""}
            ${pr.code ? `<a href="${esc(pr.code)}" target="_blank" rel="noopener">Source code ↗</a>` : ""}
          </div>` : ""}
        </div>
      </article>`
    )
    .join("");
}

/* ---------- Theme ---------- */
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (_) {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = saved || (prefersDark ? "dark" : "light");

  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (_) {}
  });
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const btn = $("#menuToggle");
  const nav = $("#nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------- Active nav link while scrolling ---------- */
function initScrollSpy() {
  const links = [...document.querySelectorAll(".nav a")];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
}

/* ---------- Fade-in on scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }),
    { threshold: 0.1 }
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Copy email ---------- */
function initCopy() {
  const toast = $("#toast");
  const show = (msg) => {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  };
  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO.email);
      show("Email copied");
    } catch (_) {
      show(PORTFOLIO.email);
    }
  });
}

/* ---------- Certificate viewer ---------- */
function initCertViewer() {
  const dialog = $("#certViewer");
  const body = $("#certViewerBody");
  const title = $("#certViewerTitle");
  const openLink = $("#certViewerOpen");

  function open(cert) {
    const isPdf = /\.pdf$/i.test(cert.file);
    title.textContent = cert.title;
    openLink.href = cert.file;
    body.innerHTML = isPdf
      ? `<iframe src="${esc(cert.file)}" title="${esc(cert.title)} certificate"></iframe>`
      : `<img src="${esc(cert.file)}" alt="${esc(cert.title)} certificate">`;
    const media = body.firstElementChild;
    if (!isPdf) {
      media.addEventListener("error", () => {
        body.innerHTML = `<p class="viewer-missing">Couldn't find <code>${esc(cert.file)}</code>. Check the file is in the certs folder and the name matches exactly.</p>`;
      });
    }
    dialog.showModal();
  }

  // Click anywhere on a card that has a file
  $("#certList").addEventListener("click", (e) => {
    if (e.target.closest("a")) return; // let "Verify credential" links work normally
    const card = e.target.closest(".cert.has-file");
    if (!card) return;
    const i = card.querySelector(".cert-open").dataset.cert;
    open(PORTFOLIO.certifications[i]);
  });

  $("#certViewerClose").addEventListener("click", () => dialog.close());
  // Click on the dark backdrop closes it
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => { body.innerHTML = ""; });
}

render();
initTheme();
initMenu();
initScrollSpy();
initReveal();
initCopy();
initCertViewer();