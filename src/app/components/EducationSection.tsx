import { FaGraduationCap } from "react-icons/fa";

export default function EducationSection() {
  return (
    <section className="education-section card">
      <h3>Education</h3>
      <div className="education-item">
        <FaGraduationCap />
        <div>
          <strong>Degree</strong> – University Name<br />
          <span>2015 – 2019</span>
        </div>
      </div>
      {/* Repeat for other education entries */}
    </section>
  );
}
