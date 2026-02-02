
export default function ExperienceSection() {
  return (
    <section className="experience-section card">
      <h3>Experience</h3>
      <div className="experience-item">
        <span style={{fontSize: '1.5em'}}>💼</span>
        <div>
          <strong>Job Title</strong> – Company Name<br />
          <span>Jan 2020 – Present</span>
          <p>
            {/* Keep your experience content exactly as written */}
            Developed and maintained web applications...
          </p>
        </div>
      </div>
      {/* Repeat for other experiences */}
    </section>
  );
}
