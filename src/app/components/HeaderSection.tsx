
export default function HeaderSection() {
  return (
    <header className="header-section hero-header">
      <div className="profile-placeholder">OC</div>
      <div className="header-content">
        <h1 className="hero-name">Orven Casido</h1>
        <h2 className="hero-role">Full Stack Developer</h2>
        <div className="contact-info">
          <a href="mailto:your.email@example.com" className="contact-icon" title="Email"><span>✉️</span></a>
          <a href="https://github.com/yourgithub" className="contact-icon" title="GitHub" target="_blank" rel="noopener"><span>🐙</span></a>
          <a href="https://linkedin.com/in/yourprofile" className="contact-icon" title="LinkedIn" target="_blank" rel="noopener"><span>in</span></a>
        </div>
      </div>
    </header>
  );
}
