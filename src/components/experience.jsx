/* eslint-disable react/prop-types */
import "../styles/experience.css";

function ExperienceCard({ title, date, description, imageUrl, isRightSide }) {
  const actualRow = isRightSide ? "row-2" : "row-1";
  return (
    <div className={`row ${actualRow}`}>
      <section>
        <i className="icon"></i>
        <div className="details">
          <span className="title">{title}</span>
          <span>{date}</span>
        </div>
        <p>{description}</p>
        <div className="bottom">
          <img className="bottom-image" src={imageUrl} />
        </div>
      </section>
    </div>
  );
}

function ExperienceContent({ json }) {
  if (json === null) return null;

  return (
    <>
      {json.experiences.map((element, index) => {
        return (
          <ExperienceCard
            key={element.key}
            title={element.title}
            date={element.date}
            description={element.description}
            isRightSide={index % 2 !== 0}
            imageUrl={element.imagePath}
          />
        );
      })}
    </>
  );
}

export default function ExperiencePage({ experienceJson }) {
  return (
    <div>
      <div className="experience-page-container">
        <div className="wrapper">
          <div className="center-line">
            <a href="" className="scroll-icon"></a>
          </div>
          <ExperienceContent json={experienceJson} />
        </div>
      </div>
    </div>
  );
}
