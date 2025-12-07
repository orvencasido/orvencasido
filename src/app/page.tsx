import Image from "next/image";

export default function Home() {
  const profile = {
    name: "Orven Example",
    title: "Senior Software Engineer",
    location: "Remote — San Francisco, CA",
    email: "orven@example.com",
    phone: "+1 (555) 123-4567",
    website: "orven.dev",
    linkedin: "linkedin.com/in/orven",
    github: "github.com/orven",
    summary:
      "Product-minded engineer with 8+ years building scalable web applications and developer tools. Skilled at leading small teams, shipping high-impact features, and improving reliability and performance.",
    skills: [
      "TypeScript",
      "React / Next.js",
      "Node.js",
      "GraphQL / REST",
      "Testing (Jest, RTL)",
      "CI/CD / Docker",
    ],
    experience: [
      {
        company: "Acme Labs",
        role: "Staff Software Engineer",
        date: "2021 — Present",
        bullets: [
          "Led redesign of core product, increasing engagement by 28% and reducing load times by 40%.",
          "Mentored 6 engineers and established a reliable release process with feature flags and canaries.",
        ],
      },
      {
        company: "Nimbus Co.",
        role: "Senior Software Engineer",
        date: "2018 — 2021",
        bullets: [
          "Built a microfrontend architecture to speed feature development across teams.",
          "Implemented end-to-end testing and observability tooling that reduced MTTR by 50%.",
        ],
      },
    ],
    education: [
      {
        school: "State University",
        degree: "B.S. Computer Science",
        date: "2014 — 2018",
      },
    ],
    projects: [
      {
        name: "Insight — analytics platform",
        desc: "Real-time dashboards and anomaly detection used by >1k customers.",
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
                <li key={p.name} className="mb-2">
                  <div className="font-medium text-zinc-800 dark:text-zinc-100">{p.name}</div>
                  <div className="text-xs">{p.desc}</div>
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

            <footer className="mt-10 border-t pt-6 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>References available upon request.</div>
                <div className="hidden text-xs sm:block">Last updated — Dec 2025</div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

