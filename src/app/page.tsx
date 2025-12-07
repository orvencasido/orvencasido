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
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <main className="mx-auto w-full max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xl text-gray-400 font-light mb-1">
              {profile.title}
            </p>
            <p className="text-gray-500 text-sm">
              📍 {profile.location}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-white via-gray-600 to-black mb-6"></div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {profile.email}
            </a>
            <span className="text-gray-600">•</span>
            <a
              href={`tel:${profile.phone}`}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {profile.phone}
            </a>
            <span className="text-gray-600">•</span>
            <a
              href={`https://${profile.website}`}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              {profile.website}
            </a>
            <span className="text-gray-600">•</span>
            <a
              href={`https://${profile.linkedin}`}
              className="text-gray-400 hover:text-white transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide flex items-center gap-3">
                <span className="w-8 h-px bg-white"></span>
                Professional Summary
              </h2>
              <p className="text-gray-400 leading-relaxed text-justify">
                {profile.summary}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-8 h-px bg-white"></span>
                Professional Experience
              </h2>
              <div className="space-y-7">
                {profile.experience.map((exp, idx) => (
                  <div key={exp.company}>
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-gray-500 font-light">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 text-sm whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-gray-400">
                          <span className="text-gray-600 mt-1">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {idx !== profile.experience.length - 1 && (
                      <div className="h-px bg-gray-800 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide flex items-center gap-3">
                <span className="w-8 h-px bg-white"></span>
                Notable Projects
              </h2>
              <div className="space-y-7">
                {profile.projects.map((project, idx) => (
                  <div key={project.name}>
                    <h3 className="text-white font-semibold text-lg mb-3">
                      {project.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      {project.descriptions.map((desc, i) => (
                        <p key={i} className="text-gray-400 flex gap-3">
                          <span className="text-gray-600">•</span>
                          <span>{desc}</span>
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-light text-gray-400 px-3 py-1 border border-gray-700 rounded-sm hover:border-gray-500 transition duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {idx !== profile.projects.length - 1 && (
                      <div className="h-px bg-gray-800 mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-light text-gray-400 px-3 py-2 border border-gray-700 rounded-sm hover:border-gray-500 hover:text-gray-300 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
                Education
              </h3>
              <div className="space-y-4">
                {profile.education.map((edu) => (
                  <div key={edu.school} className="border-l border-gray-700 pl-4">
                    <div className="font-semibold text-white text-sm mb-1">
                      {edu.degree}
                    </div>
                    <div className="text-gray-500 text-sm font-light">
                      {edu.school}
                    </div>
                    <div className="text-gray-600 text-xs mt-2">
                      {edu.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
                Certifications
              </h3>
              <div className="space-y-4">
                {profile.certifications.map((cert) => (
                  <div key={cert.name} className="border-l border-gray-700 pl-4">
                    <div className="font-semibold text-white text-sm mb-1">
                      {cert.name}
                    </div>
                    <div className="text-gray-500 text-xs font-light">
                      {cert.issuer}
                    </div>
                    <div className="text-gray-600 text-xs mt-2">
                      {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-600 text-xs">
          <p>Last updated — Dec 2025</p>
        </div>
      </main>
    </div>
  );
}

