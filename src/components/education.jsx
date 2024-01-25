/* eslint-disable react/prop-types */
import "../styles/education.css";

function CourseCard({ title }) {
  return (
    <div className="course-card">
      <p className="course-name">{title}</p>
    </div>
  );
}

function RelevantCourses({ relevantCourses }) {
  return (
    <div className="relevant-courses">
      <h2 className="course-title">Relevant Courses</h2>
      <div className="course-card-list">
        {relevantCourses.map((element) => {
          return <CourseCard key={element.key} title={element.title} />;
        })}
      </div>
    </div>
  );
}

function EducationDescription({ name, type, department, major, graduateDate }) {
  return (
    <div className="edu-description">
      Graduated {graduateDate} from {name} ({type}), department of {department}{" "}
      majoring in {major}.
    </div>
  );
}

function EducationSecondarySection({ date, gpa, gpaType }) {
  return (
    <div className="edu-secondary-section">
      <h2>{date}</h2>
      <h2>
        GPA: {gpa} ({gpaType})
      </h2>
    </div>
  );
}

function EducationContent({ json }) {
  if (json === null) return null;
  return (
    <div className="education-content">
      <h1 className="edu-title">{json.name}</h1>
      <EducationSecondarySection
        date={json.studyDuration}
        gpa={json.gpa}
        gpaType={json.gpaType}
      />
      <EducationDescription
        name={json.name}
        type={json.type}
        department={json.department}
        major={json.major}
        graduateDate={json.graduateDate}
      />
      <RelevantCourses relevantCourses={json.relevantCourses} />
    </div>
  );
}

export default function EducationPage({ educationJson }) {
  return (
    <div className="education-container">
      <EducationContent json={educationJson} />
    </div>
  );
}
