import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export default function HeaderSection() {
  return (
    <header className="header-section">
      <div className="profile-pic">
        <img src="/profile-placeholder.png" alt="Profile" />
      </div>
      <div className="header-content">
        <h1>Your Name</h1>
        <h2>Your Title</h2>
        <div className="contact-info">
          <span><FaEnvelope /> your.email@example.com</span>
          <span><FaPhone /> (123) 456-7890</span>
          <span><FaLinkedin /> linkedin.com/in/yourprofile</span>
        </div>
      </div>
    </header>
  );
}
