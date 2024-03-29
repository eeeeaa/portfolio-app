import NavBar from "./navBar";
import AboutMePage from "./aboutMe";
import ExperiencePage from "./experience";
import EducationPage from "./education";
import ContactsPage from "./contacts";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAboutMeData } from "../data/aboutMeData";
import { getExperienceData } from "../data/experienceData";
import { getEducationData } from "../data/educationData";
import { getContactsData } from "../data/contactsData";
import "../styles/App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [aboutJson, setAboutJson] = useState(getAboutMeData());
  const [experienceJson, setExperienceJson] = useState(getExperienceData());
  const [educationJson, setEducationJson] = useState(getEducationData());
  const [contactsJson, setContactsJson] = useState(getContactsData());
  const isMobile = width <= 768;

  const navigate = useNavigate();

  const handleNavigation = (pageIndex) => {
    switch (pageIndex) {
      case 0: {
        navigate("/");
        break;
      }
      case 1: {
        navigate("/experience");
        break;
      }
      case 2: {
        navigate("/education");
        break;
      }
      case 3: {
        navigate("/contacts");
        break;
      }
      case 4: {
        navigate("/edit");
        break;
      }
    }
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <NavBar
        isMobile={isMobile}
        handleNavClick={handleNavigation}
        fullName={aboutJson.name}
      />
      <div className="content">
        <Routes>
          <Route path="/" element={<AboutMePage aboutJson={aboutJson} />} />
          <Route
            path="/experience"
            element={<ExperiencePage experienceJson={experienceJson} />}
          />
          <Route
            path="/education"
            element={<EducationPage educationJson={educationJson} />}
          />
          <Route
            path="/contacts"
            element={<ContactsPage contactsJson={contactsJson} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
