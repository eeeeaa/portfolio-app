/* eslint-disable react/prop-types */
import "../styles/aboutMe.css";

const fullName = "Tantai Layluxsiri";
const nickName = "Tiger";
const hardSkills = [
  "Kotlin",
  "Ktor",
  "Android Studio",
  "Jetpack Compose",
  "Git",
  "JavaScript/HTML/CSS",
  "Java",
];

const softSkills = [
  "Experience with Agile development",
  "Full-stack software development",
  "Fluent in Thai and English",
  "Work experiences in team environment",
];

function SkillItem({ skillLabel }) {
  return <li className="skill-item">{skillLabel}</li>;
}
function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => {
        return <SkillItem key={skill} skillLabel={skill} />;
      })}
    </ul>
  );
}
function HardSkillSection() {
  return (
    <div className="hard-skill-section">
      <div className="hard-skill-title">Hard Skills</div>
      <SkillList skills={hardSkills} />
    </div>
  );
}

function SoftSkillSection() {
  return (
    <div className="soft-skill-section">
      <div className="soft-skill-title">Soft Skills</div>
      <SkillList skills={softSkills} />
    </div>
  );
}

function AboutMeSection() {
  return (
    <div className="about-me-section">
      <div className="about-me-title">About Me</div>
      <div className="about-me-description">
        Hello, my name is {fullName} ({nickName}), My main experiences are
        Android programming, with experiences from companies such as Agoda and
        Wongnai, some web development, and game programming.
      </div>
    </div>
  );
}

function ProfileImage() {
  return <div className="profile-image"></div>;
}

export default function AboutMePage() {
  return (
    <div>
      <div className="about-me-container">
        <ProfileImage />
        <AboutMeSection />
        <HardSkillSection />
        <SoftSkillSection />
      </div>
    </div>
  );
}
