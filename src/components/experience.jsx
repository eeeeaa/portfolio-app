/* eslint-disable react/prop-types */
import "../styles/experience.css";
import agodaImage from "../assets/experienceImages/agoda-03.jpg";
import lmwnImage from "../assets/experienceImages/lmwn-01.jpg";

const data = [
  {
    key: 0,
    title: "Android Developer internship, Agoda",
    date: "June 2020 - July 2020",
    imageUrl: agodaImage,
    description:
      "A 2 month summer internship at Agoda during my 3rd year of college. I was put in the team mainly focusing on the Booking page of the Agoda app.",
  },
  {
    key: 1,
    title: "Software Engineer, Android, LINE MAN Wongnai",
    date: "Jan 2022 - present",
    imageUrl: lmwnImage,
    description:
      "Full-time position as an Android developer for the LINE MAN App, a well-known food delivery app in Thailand. My work mainly focus on the food delivery service aspect of the app including food ordering, food tracking, and so on.",
  },
];

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

export default function ExperiencePage() {
  return (
    <div>
      <div className="experience-page-container">
        <div className="wrapper">
          <div className="center-line">
            <a href="" className="scroll-icon"></a>
          </div>
          {data.map((element, index) => {
            return (
              <ExperienceCard
                key={element.key}
                title={element.title}
                date={element.date}
                description={element.description}
                isRightSide={index % 2 !== 0}
                imageUrl={element.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
