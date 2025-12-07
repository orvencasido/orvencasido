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
    <div className="min-h-screen bg-zinc-50 py-12 px-6 dark:bg-black">
      <main className="mx-auto w-full max-w-4xl rounded-xl bg-white p-8 shadow-md dark:bg-zinc-900">
        <header className="flex flex-col-reverse items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              {profile.title} • {profile.location}
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end md:flex-row md:gap-6">
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="text-sm text-zinc-700 hover:underline dark:text-zinc-200"
              >
                {profile.email}
              </a>
              <span className="hidden text-zinc-400 md:inline">•</span>
              <a
                href={`tel:${profile.phone}`}
                className="hidden text-sm text-zinc-700 hover:underline dark:text-zinc-200 md:inline"
              >
                {profile.phone}
              </a>
            </div>
            <div className="mt-1 flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 md:mt-0">
              <a href={`https://${profile.website}`} className="hover:underline">
                {profile.website}
              </a>
              <span className="hidden md:inline">•</span>
              <a href={`https://${profile.linkedin}`} className="hover:underline">
                {profile.linkedin.replace("https://", "")}
              </a>
            </div>
          </div>
        </header>

        <section className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-4">
          <aside className="order-2 md:order-1 md:col-span-1">
            <h3 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Summary
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {profile.summary}
            </p>

            <h3 className="mt-6 mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Skills
            </h3>
            <ul className="flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Projects
            </h3>
            <ul className="text-sm text-zinc-600 dark:text-zinc-400">
              {profile.projects.map((p) => (
                <li key={p.name} className="mb-4">
                  <div className="font-medium text-zinc-800 dark:text-zinc-100">{p.name}</div>
                  {p.descriptions.map((desc, i) => (
                    <div key={i} className="text-xs mb-1">{desc}</div>
                  ))}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.techStack.map((tech) => (
                      <span key={tech} className="inline-block bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs px-1 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          <div className="order-1 md:order-2 md:col-span-3">
            <section>
              <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
                Experience
              </h2>
              <div className="mt-4 space-y-6">
                {profile.experience.map((exp) => (
                  <article key={exp.company} className="">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.company}</p>
                      </div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">{exp.date}</div>
                    </div>
                    <ul className="mt-3 ml-4 list-disc text-sm text-zinc-600 dark:text-zinc-400">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="mb-1">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
                Education
              </h2>
              <div className="mt-4 space-y-3">
                {profile.education.map((e) => (
                  <div key={e.school} className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-zinc-900 dark:text-zinc-100">{e.school}</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">{e.degree}</div>
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{e.date}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
                Certifications
              </h2>
              <div className="mt-4 space-y-3">
                {profile.certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start justify-between">
                    <div>
                      <div className="font-medium text-zinc-900 dark:text-zinc-100">{cert.name}</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">{cert.issuer}</div>
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{cert.date}</div>
                  </div>
                ))}
              </div>
            </section>

            <footer className="mt-10 border-t pt-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex justify-end">
                <div className="text-xs">Last updated — Dec 2025</div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

