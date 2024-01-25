import NavBar from "./navBar";
import AboutMePage from "./aboutMe";
import ExperiencePage from "./experience";
import EducationPage from "./education";
import ContactsPage from "./contacts";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  getAboutMe,
  getContacts,
  getEducation,
  getExperience,
} from "../utils/dataLoader";
import "../styles/App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [aboutJson, setAboutJson] = useState(null);
  const [experienceJson, setExperienceJson] = useState(null);
  const [educationJson, setEducationJson] = useState(null);
  const [contactsJson, setContactsJson] = useState(null);
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
    }
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    getAboutMe().then((data) => {
      setAboutJson(data);
    });

    getExperience().then((data) => {
      setExperienceJson(data);
    });

    getEducation().then((data) => {
      setEducationJson(data);
    });

    getContacts().then((data) => {
      setContactsJson(data);
    });

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <NavBar isMobile={isMobile} handleNavClick={handleNavigation} />
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
