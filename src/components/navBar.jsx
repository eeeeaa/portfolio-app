/* eslint-disable react/prop-types */
import "../styles/navBar.css";

function NameLogo({ title }) {
  return <h1 className="cv-title">{title}</h1>;
}

function NavItem({ label }) {
  return <li className="nav-item">{label}</li>;
}

function MenuSection() {
  return (
    <ul className="nav-menu-list">
      <NavItem label={"About"} />
      <NavItem label={"Experience"} />
      <NavItem label={"Education"} />
      <NavItem label={"Contacts"} />
    </ul>
  );
}
export default function NavBar() {
  return (
    <div className="nav-bar">
      <NameLogo title={"Dummy"} />
      <MenuSection />
    </div>
  );
}
