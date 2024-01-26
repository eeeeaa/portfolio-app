/* eslint-disable react/prop-types */
import "../styles/aboutMe.css";

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
function HardSkillSection({ hardSkills }) {
  return (
    <div className="hard-skill-section">
      <div className="hard-skill-title">Hard Skills</div>
      <SkillList skills={hardSkills} />
    </div>
  );
}

function SoftSkillSection({ softSkills }) {
  return (
    <div className="soft-skill-section">
      <div className="soft-skill-title">Soft Skills</div>
      <SkillList skills={softSkills} />
    </div>
  );
}

function AboutMeSection({ about, fullName, nickName }) {
  return (
    <div className="about-me-section">
      <div className="about-me-title">About Me</div>
      <div className="about-me-description">{about(fullName, nickName)}</div>
    </div>
  );
}

function ProfileImage() {
  return <div className="profile-image"></div>;
}

function AboutMeContent({ aboutJson }) {
  if (aboutJson === null) return null;

  return (
    <>
      <AboutMeSection
        about={aboutJson.about}
        fullName={aboutJson.name}
        nickName={aboutJson.nickName}
      />
      <HardSkillSection hardSkills={aboutJson.hardSkills} />
      <SoftSkillSection softSkills={aboutJson.softSkills} />
    </>
  );
}

export default function AboutMePage({ aboutJson }) {
  return (
    <div>
      <div className="about-me-container">
        <ProfileImage />
        <AboutMeContent aboutJson={aboutJson} />
      </div>
    </div>
  );
}
