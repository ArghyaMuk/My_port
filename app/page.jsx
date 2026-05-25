'use client';

import { useEffect, useState, useRef } from "react";

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("");
  const [showResume, setShowResume] = useState(false);
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("intro");
  const fullText = "Arghya Mukherjee";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typing);
    }, 90);
    return () => clearInterval(typing);
  }, []);

  // Live clock (UTC) — DevOps vibe
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Section observer for nav highlight
  useEffect(() => {
    const ids = ["intro", "about", "stack", "experience", "projects", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const resumeFileUrl = "/resume/Arghya_Mukherjee_Resume.pdf";

  const resumeDetails = {
    summary:
      "Azure Cloud & DevOps Engineer with 4+ years of experience leading secure, scalable cloud transformations using Azure, Terraform, and Kubernetes.",
    experience: [
      {
        title: "DevOps Engineer",
        company: "Tata Consultancy Services",
        period: "Aug 2022 — Present",
        bullets: [
          "Designed and implemented Azure Landing Zones for enterprise workloads.",
          "Automated infrastructure deployment using Terraform and Azure DevOps.",
          "Built CI/CD pipelines with Azure DevOps, Jenkins, and GitHub Actions.",
          "Managed Docker and AKS workloads for scalable cloud-native platforms.",
        ],
      },
    ],
    education: [{ degree: "B.Tech in Computer Science", school: "XYZ University", year: "2022" }],
    certifications: ["AZ-104 Microsoft Azure Administrator", "AZ-400 Microsoft DevOps Engineer Expert"],
  };

  const skills = [
    { name: "Microsoft Azure", cat: "cloud" },
    { name: "Terraform", cat: "iac" },
    { name: "Kubernetes", cat: "orchestration" },
    { name: "Docker", cat: "containers" },
    { name: "Azure DevOps", cat: "cicd" },
    { name: "GitHub Actions", cat: "cicd" },
    { name: "Jenkins", cat: "cicd" },
    { name: "Entra ID", cat: "identity" },
    { name: "Azure Landing Zone", cat: "cloud" },
    { name: "CI/CD", cat: "cicd" },
    { name: "Linux", cat: "ops" },
    { name: "Bash", cat: "ops" },
  ];

  const projects = [
    {
      id: "01",
      title: "Cloud Infrastructure Automation",
      description: "Automated Azure infrastructure provisioning using Terraform and Azure DevOps.",
      stack: ["Terraform", "Azure", "Azure DevOps"],
      link: "https://https://github.com/ArghyaMuk",
      status: "production",
    },
    {
      id: "02",
      title: "AKS Monitoring System",
      description: "Built Kubernetes monitoring and deployment workflows using AKS and Docker.",
      stack: ["AKS", "Docker", "Prometheus"],
      link: "https://github.com/arghyamuk66",
      status: "production",
    },
    {
      id: "03",
      title: "Inventory Management App",
      description: "Created a Docker-based inventory management application using Next.js.",
      stack: ["Next.js", "Docker", "Node"],
      link: "https://github.com/arghyamuk66",
      status: "active",
    },
  ];

  const navItems = [
    { id: "intro", label: "intro" },
    { id: "about", label: "about" },
    { id: "stack", label: "stack" },
    { id: "experience", label: "work" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "contact" },
  ];

  return (
    <div className="min-h-screen relative noise">
      {/* Animated background layers */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full blur-3xl float-slow"
             style={{ background: "radial-gradient(circle, rgba(0,255,157,0.12), transparent 70%)" }} />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl float-slow"
             style={{ background: "radial-gradient(circle, rgba(77,158,255,0.10), transparent 70%)", animationDelay: "-4s" }} />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-3xl float-slow"
             style={{ background: "radial-gradient(circle, rgba(255,107,53,0.06), transparent 70%)", animationDelay: "-8s" }} />
        {/* Scanline */}
        <div className="absolute inset-x-0 h-[2px] scanline"
             style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,157,0.4), transparent)" }} />
      </div>

      {/* Top status bar */}
      <div className="fixed top-0 inset-x-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-12 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)] status-pulse" />
            <span className="hidden sm:inline">system://available</span>
            <span className="sm:hidden">online</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>region: ap-south-1</span>
            <span>v2026.01</span>
            <span>{time}</span>
          </div>
          <div className="md:hidden">{time}</div>
        </div>
      </div>

      {/* Side nav (desktop) */}
      <nav className="hidden lg:flex fixed left-3 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.15em] w-[120px]">
        {navItems.map((item, i) => (
          <a key={item.id} href={`#${item.id}`}
             className="group flex items-center gap-2 text-[var(--ink-mute)] hover:text-[var(--ink)] transition">
            <span className={`block h-px transition-all ${activeSection === item.id ? "w-6 bg-[var(--accent)]" : "w-4 bg-[var(--ink-mute)] group-hover:w-8 group-hover:bg-[var(--ink-dim)]"}`} />
            <span className={activeSection === item.id ? "text-[var(--accent)]" : ""}>
              {String(i + 1).padStart(2, "0")} {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md reveal">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[var(--line-strong)] bg-[var(--bg-elev)] shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between border-b border-[var(--line)] bg-[var(--bg-elev)] px-6 md:px-8 py-5 z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">/resume</span>
                <span className="font-mono text-[11px] text-[var(--ink-mute)]">cat resume.md</span>
              </div>
              <div className="flex items-center gap-2">
                <a href={resumeFileUrl} target="_blank" rel="noopener noreferrer"
                   className="font-mono text-[11px] uppercase tracking-[0.2em] border border-[var(--accent)] text-[var(--accent)] px-3 py-2 hover:bg-[var(--accent)] hover:text-[var(--bg)] transition">
                  ↗ Open PDF
                </a>
                <button onClick={() => setShowResume(false)}
                        className="font-mono text-[11px] uppercase tracking-[0.2em] border border-[var(--line-strong)] text-[var(--ink-dim)] px-3 py-2 hover:text-[var(--ink)] hover:border-[var(--ink)] transition">
                  ✕ Close
                </button>
              </div>
            </div>

            <div className="px-6 md:px-10 py-10">
              <div className="mb-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-2">→ profile</p>
                <h2 className="font-serif text-5xl md:text-6xl leading-none mb-4">Arghya Mukherjee</h2>
                <p className="text-[var(--ink-dim)] leading-relaxed max-w-2xl">{resumeDetails.summary}</p>
              </div>

              <div className="mb-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-4">→ experience</p>
                {resumeDetails.experience.map((item) => (
                  <div key={item.title} className="border-l-2 border-[var(--accent)] pl-5">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                      <div>
                        <h3 className="font-serif text-2xl">{item.title}</h3>
                        <p className="text-[var(--ink-dim)] text-sm">{item.company}</p>
                      </div>
                      <p className="font-mono text-xs text-[var(--ink-mute)]">{item.period}</p>
                    </div>
                    <ul className="space-y-2 text-[var(--ink-dim)] text-sm">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex gap-2"><span className="text-[var(--accent)]">▸</span>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-4">→ education</p>
                  {resumeDetails.education.map((e) => (
                    <div key={e.school} className="border-l-2 border-[var(--line-strong)] pl-5">
                      <p className="font-serif text-xl">{e.degree}</p>
                      <p className="text-[var(--ink-dim)] text-sm font-mono">{e.school} · {e.year}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-4">→ certifications</p>
                  <ul className="space-y-2 border-l-2 border-[var(--line-strong)] pl-5">
                    {resumeDetails.certifications.map((c) => (
                      <li key={c} className="text-[var(--ink-dim)] text-sm flex gap-2">
                        <span className="text-[var(--accent-cool)] font-mono">●</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ INTRO / HERO ============ */}
      <section id="intro" className="relative pt-32 pb-24 px-6 md:px-10 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div className="reveal flex items-center gap-4 mb-12 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-mute)]"
               style={{ animationDelay: "0.1s" }}>
            <span className="block w-12 h-px bg-[var(--accent)]" />
            <span>portfolio_v3 // 2026</span>
          </div>

          {/* Massive editorial heading */}
          <div className="reveal mb-12" style={{ animationDelay: "0.2s" }}>
            <h1 className="leading-[0.85] tracking-tight">
              <span className="block font-serif text-[clamp(3.5rem,11vw,10rem)] italic text-[var(--ink-dim)]">
                Hello, I'm
              </span>
              <span className="block font-serif text-[clamp(3.5rem,11vw,10rem)] text-[var(--ink)] -mt-2">
                {displayText}
                <span className="blink text-[var(--accent)] font-sans">_</span>
              </span>
            </h1>
          </div>

          {/* Tag rows */}
          <div className="reveal grid md:grid-cols-12 gap-8 mb-16" style={{ animationDelay: "0.4s" }}>
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl text-[var(--ink-dim)] leading-relaxed max-w-2xl">
                Azure Cloud & DevOps Engineer with <span className="text-[var(--accent)] font-mono">4+ years</span> shipping secure, scalable infrastructure. I architect landing zones, write Terraform that runs, and keep pipelines green.
              </p>
            </div>
            <div className="md:col-span-5 md:border-l md:border-[var(--line)] md:pl-8 space-y-3 font-mono text-xs">
              <div className="flex justify-between text-[var(--ink-mute)]">
                <span>role</span><span className="text-[var(--ink)]">DevOps Engineer</span>
              </div>
              <div className="flex justify-between text-[var(--ink-mute)]">
                <span>location</span><span className="text-[var(--ink)]">India · IST</span>
              </div>
              <div className="flex justify-between text-[var(--ink-mute)]">
                <span>availability</span><span className="text-[var(--accent)] inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] status-pulse" />open to opportunities
                </span>
              </div>
              <div className="flex justify-between text-[var(--ink-mute)]">
                <span>focus</span><span className="text-[var(--ink)]">Azure · Terraform · K8s</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="reveal flex flex-wrap gap-3" style={{ animationDelay: "0.6s" }}>
            <button onClick={() => setShowResume(true)}
                    className="group relative font-mono text-xs uppercase tracking-[0.2em] bg-[var(--accent)] text-[var(--bg)] px-6 py-4 hover:bg-[var(--ink)] transition-all sheen">
              <span className="relative z-10">▸ view resume</span>
            </button>
            <a href={resumeFileUrl} target="_blank" rel="noopener noreferrer"
               className="font-mono text-xs uppercase tracking-[0.2em] border border-[var(--line-strong)] text-[var(--ink)] px-6 py-4 hover:border-[var(--accent)] hover:text-[var(--accent)] transition">
              ↓ download.pdf
            </a>
            <a href="mailto:arghyamukherjee06@gmail.com"
               className="font-mono text-xs uppercase tracking-[0.2em] border border-[var(--line-strong)] text-[var(--ink)] px-6 py-4 hover:border-[var(--accent)] hover:text-[var(--accent)] transition">
              ✉ contact
            </a>
            <a href="https://www.linkedin.com/in/arghyamuk66/" target="_blank" rel="noopener noreferrer"
               className="font-mono text-xs uppercase tracking-[0.2em] border border-[var(--line-strong)] text-[var(--ink)] px-6 py-4 hover:border-[var(--accent)] hover:text-[var(--accent)] transition">
              ↗ linkedin
            </a>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section className="relative py-6 border-y border-[var(--line)] bg-[var(--bg-elev)]/40 overflow-hidden">
        <div className="flex marquee whitespace-nowrap font-serif text-3xl md:text-5xl italic">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 text-[var(--ink-mute)]">
              <span>Azure</span><span className="text-[var(--accent)]">✦</span>
              <span>Terraform</span><span className="text-[var(--accent)]">✦</span>
              <span>Kubernetes</span><span className="text-[var(--accent)]">✦</span>
              <span>CI/CD</span><span className="text-[var(--accent)]">✦</span>
              <span>Landing Zones</span><span className="text-[var(--accent)]">✦</span>
              <span>AKS</span><span className="text-[var(--accent)]">✦</span>
              <span>GitHub Actions</span><span className="text-[var(--accent)]">✦</span>
              <span>Entra ID</span><span className="text-[var(--accent)]">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="relative px-6 md:px-10 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-mute)] mb-4">
              <span className="text-[var(--accent)]">§ 01</span> / about
            </p>
            <h2 className="font-serif text-5xl md:text-6xl leading-[0.95]">
              Building <em className="text-[var(--accent)]">resilient</em> cloud, one commit at a time.
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-6">
            <p className="text-lg md:text-xl text-[var(--ink-dim)] leading-relaxed mb-6">
              I work where infrastructure meets automation — designing Azure Landing Zones, modernizing legacy workloads, and replacing click-ops with code that anyone on the team can read.
            </p>
            <p className="text-lg md:text-xl text-[var(--ink-dim)] leading-relaxed mb-10">
              Comfortable across the full lifecycle: from network topology and identity (Entra ID) down to the YAML in a pipeline. I care about clean diffs, observable systems, and pipelines that fail loudly.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--line)]">
              {[
                { k: "4+", v: "years experience" },
                { k: "20+", v: "landing zones" },
                { k: "100%", v: "infra as code" },
                { k: "2", v: "azure certs" },
              ].map((s) => (
                <div key={s.v} className="bg-[var(--bg)] p-6">
                  <p className="font-serif text-4xl text-[var(--accent)] mb-1">{s.k}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ STACK ============ */}
      <section id="stack" className="relative px-6 md:px-10 lg:px-24 py-32 border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-mute)] mb-3">
                <span className="text-[var(--accent)]">§ 02</span> / stack
              </p>
              <h2 className="font-serif text-5xl md:text-6xl leading-none">The toolkit.</h2>
            </div>
            <p className="font-mono text-xs text-[var(--ink-mute)] max-w-xs">
              tools_used.length === <span className="text-[var(--accent)]">{skills.length}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
            {skills.map((s, i) => (
              <div key={s.name}
                   className="group relative bg-[var(--bg)] p-6 hover:bg-[var(--bg-elev)] transition-colors cursor-default sheen">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {String(i + 1).padStart(2, "0")} · {s.cat}
                </p>
                <p className="font-serif text-2xl text-[var(--ink)]">{s.name}</p>
                <span className="absolute top-4 right-4 text-[var(--ink-mute)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section id="experience" className="relative px-6 md:px-10 lg:px-24 py-32 border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-mute)] mb-3">
              <span className="text-[var(--accent)]">§ 03</span> / work
            </p>
            <h2 className="font-serif text-5xl md:text-6xl leading-none">Where I've shipped.</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-4 font-mono text-xs text-[var(--ink-mute)] space-y-2">
              <p>aug 2022 — present</p>
              <p className="text-[var(--accent)] inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] status-pulse" />
                deployment: active
              </p>
            </div>

            <div className="md:col-span-8 border border-[var(--line)] p-8 md:p-10 bg-[var(--bg-elev)]/40 hover:border-[var(--accent)] transition-colors sheen">
              <div className="flex items-start justify-between mb-2 flex-wrap gap-3">
                <h3 className="font-serif text-3xl md:text-4xl">DevOps Engineer</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] border border-[var(--accent)] text-[var(--accent)] px-2 py-1">
                  current
                </span>
              </div>
              <p className="text-[var(--ink-dim)] mb-8 font-mono text-sm">@ Tata Consultancy Services</p>

              <ul className="space-y-4">
                {[
                  "Designed and implemented Azure Landing Zones for enterprise workloads.",
                  "Led Azure Migration and modernization projects across regulated industries.",
                  "Automated infrastructure using Terraform and Azure DevOps.",
                  "Built CI/CD pipelines with Azure DevOps, Jenkins, and GitHub Actions.",
                  "Managed Docker and Kubernetes (AKS) workloads at production scale.",
                ].map((b, i) => (
                  <li key={b} className="flex gap-4 group">
                    <span className="font-mono text-xs text-[var(--ink-mute)] mt-1.5 group-hover:text-[var(--accent)] transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[var(--ink-dim)] group-hover:text-[var(--ink)] transition-colors">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section id="projects" className="relative px-6 md:px-10 lg:px-24 py-32 border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-mute)] mb-3">
              <span className="text-[var(--accent)]">§ 04</span> / projects
            </p>
            <h2 className="font-serif text-5xl md:text-6xl leading-none">Selected work.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)]">
            {projects.map((p) => (
              <a key={p.id}
                 href={p.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group block bg-[var(--bg)] p-8 hover:bg-[var(--bg-elev)] transition-colors relative sheen">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs text-[var(--ink-mute)]">{p.id} /</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] inline-flex items-center gap-2 text-[var(--accent)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] status-pulse" />
                    {p.status}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[var(--ink-dim)] text-sm leading-relaxed mb-8">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] uppercase tracking-wider border border-[var(--line-strong)] text-[var(--ink-dim)] px-2 py-1">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[var(--line)]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)] group-hover:text-[var(--ink)] transition-colors">
                    view repository
                  </span>
                  <span className="text-[var(--ink-mute)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT / CTA ============ */}
      <section id="contact" className="relative px-6 md:px-10 lg:px-24 py-32 border-t border-[var(--line)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-mute)] mb-3">
                <span className="text-[var(--accent)]">§ 05</span> / contact
              </p>
              <h2 className="font-serif text-6xl md:text-8xl leading-[0.9] mb-6">
                Let's build <em className="text-[var(--accent)]">something</em> that scales.
              </h2>
              <p className="text-lg text-[var(--ink-dim)] max-w-xl">
               Automate the repeatable. Master the impossible.
              </p>
            </div>

            <div className="md:col-span-4 space-y-px bg-[var(--line)] border border-[var(--line)]">
              <a href="mailto:arghyamukherjee06@gmail.com"
                 className="block bg-[var(--bg)] p-5 hover:bg-[var(--bg-elev)] transition group">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-1">email</p>
                <p className="font-serif text-xl group-hover:text-[var(--accent)] transition-colors break-all">
                  arghyamukherjee06@gmail.com
                </p>
              </a>
              <a href="https://www.linkedin.com/in/arghyamuk66/" target="_blank" rel="noopener noreferrer"
                 className="block bg-[var(--bg)] p-5 hover:bg-[var(--bg-elev)] transition group">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-1">linkedin</p>
                <p className="font-serif text-xl group-hover:text-[var(--accent)] transition-colors">
                  /in/arghyamuk66 ↗
                </p>
              </a>
              <a href="https://github.com/ArghyaMuk" target="_blank" rel="noopener noreferrer"
                 className="block bg-[var(--bg)] p-5 hover:bg-[var(--bg-elev)] transition group">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-mute)] mb-1">github</p>
                <p className="font-serif text-xl group-hover:text-[var(--accent)] transition-colors">
                  /ArghyaMuk ↗
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="relative px-6 md:px-10 lg:px-24 py-10 border-t border-[var(--line)] bg-[var(--bg-elev)]/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-mute)]">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] status-pulse" />
            <span>© 2026 arghya mukherjee // all systems nominal</span>
          </div>
          <div className="flex items-center gap-4">
            <span>built with next.js</span>
            <span>·</span>
            <span>Made IN India</span>
            <span>·</span>
            <a href="#intro" className="hover:text-[var(--accent)] transition">↑ back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
