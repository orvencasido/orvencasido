
export default function ProjectsSection() {
  return (
    <section className="projects-section card">
      <h3>Projects</h3>
      <div className="project-item">
        <span style={{fontSize: '1.5em'}}>📁</span>
        <div>
          <strong>Project Name</strong>
          <p>
            {/* Keep your project content exactly as written */}
            Description of the project...
          </p>
        </div>
      </div>
      {/* Repeat for other projects */}
    </section>
  );
}
