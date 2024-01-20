import NavBar from "./navBar";
import AboutMePage from "./aboutMe";
import ExperiencePage from "./experience";
import EducationPage from "./education";
import ContactsPage from "./contacts";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../styles/App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
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
          <Route path="/" element={<AboutMePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
