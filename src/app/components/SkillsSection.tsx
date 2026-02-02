import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <section className="skills-section card">
      <h3>Skills</h3>
      <ul>
        <li><FaReact /> React</li>
        <li><FaNodeJs /> Node.js</li>
        <li><FaDatabase /> SQL</li>
        {/* Add more skills as needed, with icons */}
      </ul>
    </section>
  );
}
