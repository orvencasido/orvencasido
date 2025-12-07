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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <main className="mx-auto w-full max-w-5xl">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Name and Title Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {profile.name}
            </h1>
            <p className="text-blue-100 text-lg font-medium">
              {profile.title}
            </p>
            <p className="text-blue-100 text-sm mt-1">
              📍 {profile.location}
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-50 px-8 py-4 flex flex-wrap gap-6 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
            >
              <span>✉️</span>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
            >
              <span>📱</span>
              {profile.phone}
            </a>
            <a
              href={`https://${profile.website}`}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
            >
              <span>🌐</span>
              {profile.website}
            </a>
            <a
              href={`https://${profile.linkedin}`}
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
            >
              <span>💼</span>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-blue-600 rounded"></span>
                Professional Summary
              </h2>
              <p className="text-slate-700 leading-relaxed text-justify">
                {profile.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-blue-600 rounded"></span>
                Professional Experience
              </h2>
              <div className="space-y-8">
                {profile.experience.map((exp, idx) => (
                  <div key={exp.company} className={idx !== profile.experience.length - 1 ? "pb-8 border-b border-slate-200" : ""}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {exp.role}
                        </h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4">
                        {exp.date}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-slate-700">
                          <span className="text-blue-600 font-bold mt-1">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-blue-600 rounded"></span>
                Notable Projects
              </h2>
              <div className="space-y-6">
                {profile.projects.map((project, idx) => (
                  <div key={project.name} className={idx !== profile.projects.length - 1 ? "pb-6 border-b border-slate-200" : ""}>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {project.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      {project.descriptions.map((desc, i) => (
                        <p key={i} className="text-slate-700 flex gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          {desc}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Education
              </h3>
              <div className="space-y-4">
                {profile.education.map((edu) => (
                  <div key={edu.school}>
                    <div className="font-semibold text-slate-900 text-sm">
                      {edu.degree}
                    </div>
                    <div className="text-blue-600 text-sm font-medium">
                      {edu.school}
                    </div>
                    <div className="text-slate-600 text-xs mt-1">
                      {edu.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Certifications
              </h3>
              <div className="space-y-4">
                {profile.certifications.map((cert) => (
                  <div key={cert.name} className="border-l-2 border-blue-600 pl-3">
                    <div className="font-semibold text-slate-900 text-sm">
                      {cert.name}
                    </div>
                    <div className="text-slate-600 text-xs">
                      {cert.issuer}
                    </div>
                    <div className="text-blue-600 text-xs font-medium mt-1">
                      {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Last updated — Dec 2025</p>
        </div>
      </main>
    </div>
  );
}

