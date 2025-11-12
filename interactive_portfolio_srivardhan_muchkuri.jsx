'use client';

// Fixed and clean React portfolio - Kali terminal themed
import React, { useMemo, useEffect, useState } from "react";
import { Moon, Sun, Github, Linkedin, ShieldCheck, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// ========================
// THEME
// ========================
const THEMES = {
  dark: {
    body: "bg-[#0f1113] text-[#c9d1d9]",
    border: "border-[#1d2330]",
    panel: "bg-[#12151a] text-[#c9d1d9]",
    frameTop: "bg-[#0b0d10]",
    header: "bg-[#0f1113]/90",
    frameGlow: "shadow-[0_0_30px_rgba(38,134,255,0.35)] ring-1 ring-blue-900/40",
    tickerText: "text-green-300",
  },
  light: {
    body: "bg-[#f9fafb] text-[#0f1113]",
    border: "border-[#cbd5f5]",
    panel: "bg-white text-[#0f1113]",
    frameTop: "bg-[#e2e8f0]",
    header: "bg-white/90",
    frameGlow: "shadow-[0_0_30px_rgba(30,64,175,0.2)] ring-1 ring-blue-200/60",
    tickerText: "text-green-700",
  },
};

const TerminalFrame = ({ title, children, className = "", palette }) => (
  <div
    className={`relative rounded-xl border ${palette.border} ${palette.frameGlow} ${className} overflow-hidden my-6`}
  >
    <div className={`flex items-center gap-2 px-3 py-2 ${palette.frameTop} border-b ${palette.border}`}>
      <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
      <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
      <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
      <span className="ml-3 text-xs text-gray-400">{title}</span>
    </div>
    <div className={`p-4 ${palette.panel}`}>{children}</div>
  </div>
);

const Prompt = ({ cmd }) => (
  <div className="font-mono text-sm md:text-base leading-relaxed">
    <span className="text-green-400">root</span>@<span className="text-blue-400">kali</span>:~# <span>{cmd}</span>
  </div>
);

const TypeLine = ({ text, speed = 60, loop = true, delay = 1500 }) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let index = 0;
    let typeTimeout;
    let resetTimeout;

    const type = () => {
      typeTimeout = setTimeout(() => {
        setDisplay(text.slice(0, index + 1));
        index += 1;

        if (index < text.length) {
          type();
        } else if (loop) {
          resetTimeout = setTimeout(() => {
            index = 0;
            setDisplay("");
            type();
          }, delay);
        }
      }, speed);
    };

    setDisplay("");
    type();

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(resetTimeout);
    };
  }, [text, speed, loop, delay]);

  return <span>{display || "..."}</span>;
};

// ========================
// MAIN COMPONENT
// ========================
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [query, setQuery] = useState("");
  const [activeProject, setActiveProject] = useState(null);
  const palette = dark ? THEMES.dark : THEMES.light;

  const PROFILE = {
    name: "Srivardhan Muchkuri",
    headline: "Cybersecurity Engineer | Network Security | Ethical Hacking | Python Automation",
    mission:
      "I'm passionate about building secure networks and ethical hacking tools that enhance real-world security awareness.",
    location: "Danville, Illinois, USA",
    email: "srivardhanmuchkuri@gmail.com",
    phone: "+1 (217) 790-7135",
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle/",
  };

  const FOCUS_AREAS = [
    "Network security & SOC operations",
    "Wireless & Wi-Fi security (Pwngotchi / Hawk)",
    "Penetration testing labs (ethical / lab-only)",
    "Python scripting for automation",
    "Cloud & container security fundamentals",
    "Incident response and log triage",
    "Embedded Linux and device hardening",
  ];

  const EDUCATION = [
    {
      title: "M.S. Cybersecurity, Eastern Illinois University",
      period: "2024-2026",
      details: ["Focus: IoT vulnerabilities, SOC design, Wi-Fi security, botnets"],
    },
    {
      title: "B.Tech Computer Science, SR International Institute of Technology",
      period: "2019-2023",
      details: ["Final Year Project: Secure Cloud Storage with RSA & Dynamic Hashing"],
    },
  ];

  const CERTIFICATIONS = ["CompTIA Security+", "CCNA", "eJPT", "OSCP (in progress)"];

  const PROJECTS = [
    {
      title: "Hawk Wi-Fi Research Device",
      desc: "Handheld Pwngotchi-based platform with dual-band support.",
      details: [
        "Modular plugin framework for targeted capture/export workflows",
        "Dual-band (2.4/5 GHz) with adaptive power management for field ops",
        "OLED telemetry plus SSH console for advanced control",
      ],
      command: "man hawk-device",
    },
    {
      title: "ESP32 Web Wi-Fi Scanner",
      desc: "Real-time Wi-Fi visualization served directly from the microcontroller.",
      details: [
        "Live spectrum updates with auto-refresh dashboard",
        "Multi-network monitoring with signal and encryption metadata",
        "Built-in REST API for data export into SOC dashboards",
      ],
      command: "man esp32-webscan",
    },
    {
      title: "Enterprise Network Simulation",
      desc: "Lab topology mirroring enterprise routing and segmentation.",
      details: [
        "Multi-router, VLAN-heavy design with static + dynamic routing",
        "Includes firewall zones, IPS rules, and syslog aggregation",
        "Traffic replay scripts simulate business-critical workloads",
      ],
      command: "man enterprise-sim",
    },
    {
      title: "SOC Playbook Notebook",
      desc: "Interactive Jupyter tooling for faster triage and enrichment.",
      details: [
        "Automates indicator lookups, tagging, and escalation workflows",
        "Integrates with VirusTotal, GreyNoise, and internal intel feeds",
        "Produces exportable markdown for knowledge base updates",
      ],
      command: "man soc-playbook",
    },
    {
      title: "Phishing Awareness Campaign (Gophish)",
      desc: "Organization-wide awareness drills with measurable feedback.",
      details: [
        "Custom landing pages, tracking, and remediation guidance",
        "Dashboards break down click/report rates per cohort",
        "Automated follow-ups with micro-training assets",
      ],
      command: "man gophish-campaign",
    },
    {
      title: "OSINT Investigation Toolset",
      desc: "Maltego + theHarvester pipeline for ethical threat research.",
      details: [
        "Maps simulated actor footprints without touching production data",
        "Exports graph datasets for briefing decks",
        "Reusable automation scripts for repeatable lab exercises",
      ],
      command: "man osint-toolset",
    },
  ];

  const SKILL_GROUPS = {
    Languages: ["Python", "Bash", "Java (undergrad background)"],
    Networking: ["Cisco CLI", "VLAN design", "Static/Dynamic routing", "Subnetting & VLSM"],
    "Security Tools": ["Wireshark", "Burp Suite", "Metasploit", "Gophish", "nmap"],
    OS: ["Kali Linux", "Ubuntu", "Windows 11 ARM"],
    Hardware: ["ESP32", "Raspberry Pi Zero 2 W", "ALFA adapters"],
    "Dev Tools": ["Git", "VS Code", "Docker (basic)", "VirtualBox"],
  };

  const ACHIEVEMENTS = [
    "Night shift supervisor - led incident escalation and discipline.",
    "Organized college tech fests and supervised multi-track events.",
    "Java backend internship - mentored peers and aligned deliverables.",
    "Built Hawk tooling, improving RF capture efficiency significantly.",
  ];

  const SOFT_SKILLS = [
    "Strong documentation and presentation ability",
    "Event leadership and coordination",
    "Problem solving under time constraints",
    "Bridging technical and non-technical stakeholders",
  ];

  const FUTURE_GOALS = {
    shortTerm: "Secure a SOC or network security engineer role.",
    longTerm: "Found a cybersecurity startup focused on wireless research and defense tools.",
  };

  const TICKER = [
    "[OK] Incident triage notebook synced",
    "[OK] Hawk telemetry upload complete",
    "[INFO] Gophish campaign metrics exported",
    "[OK] SOC enrichment bot containers rebuilt",
    "[WARN] Pending OSCP lab window booking",
  ];

  const filtered = useMemo(() => {
    return PROJECTS.filter((project) => project.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, PROJECTS]);

  return (
    <div className={`min-h-screen ${palette.body}`}>
      <header className={`sticky top-0 border-b ${palette.border} backdrop-blur ${palette.header} z-50`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
          <div className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="text-blue-400 h-5 w-5" />
            root@kali:~
          </div>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setDark(!dark)}
            className={dark ? "" : "border-[#94a3b8] text-[#0f1113] hover:bg-slate-100"}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <TerminalFrame title="root@kali:~ / banner" palette={palette}>
          <pre className="text-xs md:text-sm text-blue-300 font-mono leading-snug overflow-auto">
{`   _____       _                _ _                 _         __  __       _       _             
  / ____|     | |              (_) |               | |       |  \\/  |     | |     | |            
 | (___  _   _| |__   __ _ _ __ _| |__   ___   ___ | | __    | \\  / | __ _| |_ ___| |__   _   _ 
  \\___ \\| | | | '_ \\ / _\` | '__| | '_ \\ / _ \\ / _ \\| |/ /    | |\\/| |/ _\` | __/ __| '_ \\ | | | |
  ____) | |_| | |_) | (_| | |  | | | | | (_) | (_) |   <     | |  | | (_| | || (__| | | || |_| |
 |_____/ \\__,_|_.__/ \\__,_|_|  |_|_| |_|\\___/ \\___/|_|\\_\\    |_|  |_|\\__,_|\\__\\___|_| |_| \\__, |
                                                                                           __/ |
                                                                                          |___/ `}
          </pre>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / whoami" palette={palette}>
          <Prompt cmd={<TypeLine text="cat mission.txt" />} />
          <div className="mt-3 space-y-2">
            <h1 className="text-2xl font-bold text-white">{PROFILE.name}</h1>
            <p className="text-sm text-blue-300 uppercase tracking-wide">{PROFILE.headline}</p>
            <p className="text-sm text-gray-300 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-green-400" />
              {PROFILE.mission}
            </p>
            <p className="text-sm text-gray-400 mt-1">Location: {PROFILE.location}</p>
          </div>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / professional-focus" palette={palette}>
          <Prompt cmd={<TypeLine text="ls focus_areas/" />} />
          <div className="mt-3 grid md:grid-cols-2 gap-3">
            {FOCUS_AREAS.map((area) => (
              <div key={area} className="border border-[#1d2330] rounded-lg px-3 py-2 text-sm bg-[#0f1113]/60">
                {area}
              </div>
            ))}
          </div>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / education-certifications" palette={palette}>
          <Prompt cmd="cat education.md" />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {EDUCATION.map((edu) => (
              <Card key={edu.title} className="bg-transparent border-[#1d2330]">
                <CardHeader>
                  <CardTitle className="text-base">{edu.title}</CardTitle>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                    {edu.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-xs uppercase text-blue-300 tracking-wide mb-2">Certifications</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {CERTIFICATIONS.map((cert) => (
                <span key={cert} className="border border-blue-500/40 bg-blue-500/10 rounded-full px-3 py-1">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / skills" palette={palette}>
          <Prompt cmd="cat skills.txt" />
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            {Object.entries(SKILL_GROUPS).map(([category, skills]) => (
              <div key={category} className="border border-[#1d2330] rounded-lg p-3 bg-[#0f1113]/60">
                <p className="text-sm font-semibold text-blue-300">{category}</p>
                <ul className="text-sm text-gray-300 mt-2 space-y-1">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / projects" palette={palette}>
          <Prompt cmd={<TypeLine text="ls -la projects/" />} />
          <Input
            placeholder="grep project..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className={`my-3 ${dark ? "" : "bg-white text-[#0f1113] border-[#94a3b8] placeholder:text-[#64748b]"}`}
          />
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((project) => (
              <Card
                key={project.title}
                className={`${palette.panel} border ${palette.border} cursor-pointer hover:border-blue-500/60 transition`}
                onClick={() => setActiveProject(project)}
              >
                <CardHeader className="flex flex-col gap-1">
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-xs text-gray-400">{project.command}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">{project.desc}</p>
                  <Button
                    variant="outline"
                    className={`mt-3 w-full ${
                      dark ? "" : "border-[#94a3b8] text-[#0f1113] hover:bg-slate-100"
                    }`}
                    onClick={() => setActiveProject(project)}
                  >
                    man page
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / achievements" palette={palette}>
          <Prompt cmd="cat achievements.log" />
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            {ACHIEVEMENTS.map((ach) => (
              <li key={ach} className="flex items-start gap-2">
                <span className="text-blue-400">*</span>
                {ach}
              </li>
            ))}
          </ul>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / soft-skills" palette={palette}>
          <Prompt cmd="tail -f soft_skills.txt" />
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            {SOFT_SKILLS.map((skill) => (
              <div key={skill} className="border border-[#1d2330] rounded-lg px-3 py-2 text-sm text-gray-200 bg-[#0f1113]/60">
                {skill}
              </div>
            ))}
          </div>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / goals" palette={palette}>
          <Prompt cmd="cat vision.txt" />
          <div className="mt-3 space-y-3 text-sm text-gray-300">
            <div>
              <p className="text-xs uppercase text-blue-300 tracking-wide">Short Term</p>
              <p>{FUTURE_GOALS.shortTerm}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-blue-300 tracking-wide">Long Term</p>
              <p>{FUTURE_GOALS.longTerm}</p>
            </div>
          </div>
        </TerminalFrame>

        <TerminalFrame title="root@kali:~ / contact" palette={palette}>
          <Prompt cmd="cat contact.txt" />
          <p className="text-sm mt-2">Email: {PROFILE.email}</p>
          <p className="text-sm">Phone: {PROFILE.phone}</p>
          <div className="flex gap-2 mt-3">
            <Button
              asChild
              variant="outline"
              className={dark ? "" : "border-[#94a3b8] text-[#0f1113] hover:bg-slate-100"}
            >
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className={dark ? "" : "border-[#94a3b8] text-[#0f1113] hover:bg-slate-100"}
            >
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </TerminalFrame>
      </main>

      <footer className={`border-t ${palette.border} py-4 text-xs ${dark ? "text-gray-500" : "text-gray-600"}`}>
        <div className="overflow-hidden relative h-8">
          <div className={`ticker flex gap-8 uppercase tracking-wide ${palette.tickerText} text-[11px]`}>
            {TICKER.concat(TICKER).map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
        <p className="text-center mt-2">(c) {new Date().getFullYear()} {PROFILE.name} - Kali-style Portfolio</p>
      </footer>

      {activeProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-2xl">
            <TerminalFrame
              title={`man ${activeProject.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="my-0"
              palette={palette}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{activeProject.title}</h3>
                <Button variant="ghost" size="icon" onClick={() => setActiveProject(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-300 mb-4">{activeProject.desc}</p>
              <ul className="list-disc list-inside text-sm text-gray-200 space-y-2">
                {activeProject.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </TerminalFrame>
          </div>
        </div>
      )}
    </div>
  );
}
