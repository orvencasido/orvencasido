import Image from "next/image";

export default function Home() {
  const profile = {
    name: "Orven Casido",
    title: "DevOps Engineer",
    location: "Filinvest City, Philippines",
    email: "orvencasidop@gmail.com",
    phone: "+63 927 339 1882",
    website: "orvencasido.com",
    linkedin: "linkedin.com/in/orven-casido-39bb58319",
    github: "github.com/orvencasido",
    summary:
      "Results-driven DevOps Apprentice experienced in automating infrastructure, optimizing CI/CD pipelines, and managing Kubernetesbased cloud environments. Improved deployment speed by 70%, reduced manual operations by 50%, and delivered scalable AWS and Azure architectures using Docker, Terraform, Jenkins, and Ansible. Focused on building reliable, production-ready systems through efficient automation and cloud-native engineering.",
    skills: [
      "Kubernetes",
      "Docker",
      "Jenkins",
      "AWS",
      "Azure",
      "Helm",
      "Git",
      "Github Actions",
      "CICD",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
      "Kibana",
      "JavaScript",
      "Python",
      "Linux",
      "YAML",
      "Bash",
      "Networking",
    ],
    experience: [
      {
        company: "Nityo Infosys",
        role: "DevOps Engineer",
        date: "December 2025 — Present",
        bullets: [
          "Creating and Maintaning Pipelines that Supports Global Websites for Essilor Luxottica.",
        ],
      },
      {
        company: "Essilor Luxottica",
        role: "DevOps Apprentice",
        date: "June 2025 — December 2025",
        bullets: [
          "Exposed to production-grade pipelines and executed CI/CD jobs supporting global eCommerce websites, reducing deployment time by 50% through pipeline automation and optimization.",
          "Collaborated with a team of 10+ DevOps engineers to maintain enterprise-level DevOps infrastructure, contributing toimprovements in monitoring, logging, and system reliability.",
          "Enhanced non-transactional websites by setting up infrastructure and full application configuration using Kubernetes and Dockerin lower environments, contributing to 20% fewer vulnerabilities reaching production.",
        ],
      },
      {
        company: "Carabao Cloud Solutions Inc.",
        role: "Internal IT Administrator",
        date: "June 2024 - September 2024",
        bullets: [
          "Supported 50+ client profiles, providing remote access solutions and ensuring high availability of systems.",
          "Implemented proactive system monitoring, reducing downtime by 15% and improving overall system performance.",
        ],
      },
    ],
    education: [
      {
        school: "Southern Luzon State University",
        degree: "Bachelor of Science in Computer Engineering",
        date: "September 2021 — July 2025",
      },
    ],
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Udemy",
        date: "2025",
      },
      {
        name: "Microsoft Certified: Azure Fundamentals",
        issuer: "Udemy",
        date: "2025",
      },
      {
        name: " ICT Programming Efficiency Exam",
        issuer: "DICT",
        date: "2025",
      },
    ],
    projects: [
      {
        name: "AWS Cloud Resume Challenge",
        descriptions: [
          "Developed a personal portfolio website with 100% automation in CI/CD, significantly reducing deployment time by 70%.",
        ],
        techStack: ["AWS S3", "CloudFront", "Github", "Terraform", "AWS Lambda", "AWS DynamoDB"],
      },
      {
        name: "Full-Scale Kubernetes Deployment Project",
        descriptions: [
          "Implemented CI/CD pipelines with Jenkins, automating testing and deployment, increasing deployment frequency by 80%.",
          "Integrated Ansible for configuration management, ensuring consistency across multiple environments and improving overallsystem reliability.",
        ],
        techStack: ["Kubernetes","Jenkins", "Helm", "Docker", "Terraform", "Prometheus", "Docker","Git"],
      },
      {
        name: "Headless Website with Strapi and Next.js",
        descriptions: [
          "Developed a headless CMS website using Strapi and Next.js, enhancing content management efficiency and user experience.",
        ],
        techStack: ["Strapi","NextJS", "Docker", "Kubernetes", "Vercel", "Github"],
      },
      {
        name: "Virtual Reality Social Skill Simulator Thesis Project",
        descriptions: [
          "Developed an AI-driven VR simulator that enhances communication skills for individuals with challenges in real-world interaction.",
        ],
        techStack: ["Llama LLM","Speechify Text To Speech API", "Grock Text to Speech API", "Unity3d"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <main className="mx-auto w-full max-w-5xl">
        {/* Top Header (Twitter-like) */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
            {profile.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900">{profile.name}</h1>
              <span className="text-sm text-slate-500">•</span>
              <span className="text-sm text-slate-500">@{profile.name.toLowerCase().replace(/\s+/g, "")}</span>
            </div>
            <p className="text-sm text-slate-600">{profile.title} — {profile.location}</p>
          </div>
          <div className="ml-auto flex gap-3">
            <a href={`https://${profile.linkedin}`} className="text-sky-600 text-sm font-medium hover:underline">Follow</a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feed (left, main) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Summary card (tweet-style) */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">{profile.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-slate-900">{profile.name}</div>
                    <div className="text-sm text-slate-500">@{profile.name.toLowerCase().replace(/\s+/g, "")}</div>
                    <div className="text-sm text-slate-400">·</div>
                    <div className="text-sm text-slate-400">Summary</div>
                  </div>
                  <p className="mt-2 text-slate-700 text-sm">{profile.summary}</p>
                </div>
              </div>
            </div>

            {/* Experience feed cards */}
            {profile.experience.map((exp) => (
              <div key={exp.company} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">🏢</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">{exp.role} @ {exp.company}</div>
                        <div className="text-xs text-slate-500">{exp.date}</div>
                      </div>
                    </div>
                    <ul className="mt-3 text-slate-700 list-disc ml-5 space-y-1 text-sm">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Projects feed cards */}
            {profile.projects.map((proj) => (
              <div key={proj.name} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700">💡</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900">{proj.name}</div>
                      <div className="text-xs text-slate-400">Project</div>
                    </div>
                    <div className="mt-2 space-y-1 text-slate-700 text-sm">
                      {proj.descriptions.map((d, i) => (
                        <p key={i}>{d}</p>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {proj.techStack.map((t) => (
                        <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar (profile details) */}
          <aside className="space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <span key={s} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Education</h3>
              {profile.education.map((e) => (
                <div key={e.school} className="text-sm text-slate-700">
                  <div className="font-medium">{e.degree}</div>
                  <div className="text-slate-500">{e.school}</div>
                  <div className="text-xs text-slate-400">{e.date}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Certifications</h3>
              <div className="space-y-2 text-sm text-slate-700">
                {profile.certifications.map((c) => (
                  <div key={c.name} className="">
                    <div className="font-medium">{c.name}</div>
                    <div className="text-slate-500 text-xs">{c.issuer} · {c.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-6 text-center text-slate-400 text-xs">Last updated — Dec 2025</div>
      </main>
    </div>
  );
}

