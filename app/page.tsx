'use client';

import { useEffect, useState } from "react";

export default function Portfolio() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Arghya Mukherjee";

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typing);
      }
    }, 120);

    return () => clearInterval(typing);
  }, []);

  const [showResume, setShowResume] = useState(false);

  const resumeDetails = {
    summary:
      "Azure Cloud & DevOps Engineer with 4+ years of experience leading secure, scalable cloud transformations using Azure, Terraform, and Kubernetes.",
    experience: [
      {
        title: "DevOps Engineer",
        company: "Tata Consultancy Services",
        period: "Aug 2022 - Present",
        bullets: [
          "Designed and implemented Azure Landing Zones for enterprise workloads.",
          "Automated infrastructure deployment using Terraform and Azure DevOps.",
          "Built CI/CD pipelines with Azure DevOps, Jenkins, and GitHub Actions.",
          "Managed Docker and AKS workloads for scalable cloud-native platforms.",
        ],
      },
    ],
    education: [
      {
        degree: "B.Tech in Computer Science",
        school: "XYZ University",
        year: "2022",
      },
    ],
    certifications: [
      "AZ-104 Microsoft Azure Administrator",
      "AZ-400 Microsoft DevOps Engineer Expert",
    ],
  };

  const resumeFileUrl = "/resume/Arghya_Mukherjee_Resume.pdf";

  const skills = [
    "Microsoft Azure",
    "Terraform",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "Entra ID",
    "Azure Landing Zone",
  ];

  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description:
        "Automated Azure infrastructure provisioning using Terraform and Azure DevOps.",
      link: "https://github.com/arghyamuk66",
    },
    {
      title: "AKS Monitoring System",
      description:
        "Built Kubernetes monitoring and deployment workflows using AKS and Docker.",
      link: "https://github.com/arghyamuk66",
    },
    {
      title: "Inventory Management App",
      description:
        "Created a Docker-based inventory management application using Next.js.",
      link: "https://github.com/arghyamuk66",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-hidden selection:bg-blue-500/30">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-sm">
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl">
            <div className="flex flex-col gap-4 border-b border-white/10 bg-slate-900 px-6 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-blue-400">Resume Preview</p>
                <h2 className="text-3xl font-bold text-white">Arghya Mukherjee</h2>
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                <a
                  href={resumeFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                  Open PDF
                </a>
                <button
                  onClick={() => setShowResume(false)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="space-y-8 px-6 py-8 text-gray-300">
              <p className="leading-relaxed">
                {resumeDetails.summary}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Experience</h3>
                  {resumeDetails.experience.map((item) => (
                    <div key={item.title} className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-lg font-semibold text-white">{item.title}</p>
                          <p className="text-sm text-gray-400">{item.company}</p>
                        </div>
                        <p className="text-sm text-gray-400">{item.period}</p>
                      </div>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Education</h3>
                    {resumeDetails.education.map((item) => (
                      <div key={item.school} className="space-y-2">
                        <p className="font-semibold text-white">{item.degree}</p>
                        <p className="text-gray-400">{item.school} · {item.year}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Certifications</h3>
                    <ul className="list-disc space-y-2 pl-5 text-gray-300">
                      {resumeDetails.certifications.map((cert) => (
                        <li key={cert}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="px-6 md:px-16 py-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-widest mb-3">
              Azure Cloud & DevOps Engineer
            </p>

            <h1 className="text-5xl font-bold mb-6 min-h-[70px]">
              <span className="text-white">{displayText}</span>
              <span className="animate-pulse text-blue-500">|</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Azure Cloud & DevOps Engineer with 4+ years of experience in Azure infrastructure, Terraform, Kubernetes, CI/CD automation, and enterprise cloud operations.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setShowResume(true)}
                className="px-5 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 hover:scale-105 transition duration-300 shadow-lg"
              >
                View Resume
              </button>

              <a
                href={resumeFileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>

              <a
                href="mailto:arghyamukherjee06@gmail.com"
                className="px-5 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/arghyamuk66/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-blue-500 rounded-lg hover:bg-blue-500/10 hover:scale-105 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-blue-500 hover:shadow-blue-500/20 transition duration-300 relative overflow-hidden">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">
              Core Skills
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center text-sm hover:bg-blue-500/20 hover:scale-105 hover:border-blue-500 transition duration-300 cursor-pointer shadow-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Experienced in Azure Migration, Azure Landing Zone implementation, Infrastructure as Code (Terraform), Kubernetes, Linux administration, and cloud security.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-blue-400">
            Experience
          </h2>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">DevOps Engineer</h3>
                <p className="text-blue-400">Tata Consultancy Services</p>
              </div>

              <p className="text-gray-400">Aug 2022 - Present</p>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>• Designed and implemented Azure Landing Zones.</li>
              <li>• Led Azure Migration and modernization projects.</li>
              <li>• Automated infrastructure using Terraform and Azure DevOps.</li>
              <li>• Built CI/CD pipelines using Azure DevOps, Jenkins, and GitHub Actions.</li>
              <li>• Managed Docker and Kubernetes (AKS) workloads.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-blue-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-3 hover:shadow-blue-500/20 transition duration-300 shadow-2xl relative overflow-hidden"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-lg"
                >
                  View Project
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-16 py-10 border-t border-white/10 text-center text-gray-400 backdrop-blur-lg bg-white/5">
        <p>© 2026 Arghya Mukherjee | Azure Cloud & DevOps Engineer</p>
      </footer>
    </div>
  );
}
