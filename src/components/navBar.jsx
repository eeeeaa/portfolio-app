/* eslint-disable react/prop-types */
import "../styles/navBar.css";

function NameLogo({ title }) {
  return <h1 className="cv-title">{title}</h1>;
}

function NavItem({ label, handleNavClick, pageIndex }) {
  return (
    <li className="nav-item" onClick={() => handleNavClick(pageIndex)}>
      {label}
    </li>
  );
}

function MenuSection({ handleNavClick }) {
  return (
    <ul className="nav-menu-list">
      <NavItem pageIndex={0} handleNavClick={handleNavClick} label={"About"} />
      <NavItem
        pageIndex={1}
        handleNavClick={handleNavClick}
        label={"Experience"}
      />
      <NavItem
        pageIndex={2}
        handleNavClick={handleNavClick}
        label={"Education"}
      />
      <NavItem
        pageIndex={3}
        handleNavClick={handleNavClick}
        label={"Contacts"}
      />
    </ul>
  );
}

function Menu({ handleNavClick }) {
  return (
    <>
      <NameLogo title={"Dummy"} />
      <MenuSection handleNavClick={handleNavClick} />
    </>
  );
}

export default function NavBar({ handleNavClick }) {
  return (
    <div className="nav-bar">
      <Menu handleNavClick={handleNavClick} />
    </div>
  );
}
