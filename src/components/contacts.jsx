/* eslint-disable react/prop-types */
import "../styles/contacts.css";
import gitHubIcon from "../assets/icon/github.svg";
import linkedInIcon from "../assets/icon/linkedin.svg";
import googleIcon from "../assets/icon/google.svg";
import { useState, useEffect } from "react";
import { getContacts } from "../utils/dataLoader";

const iconObjs = [
  {
    type: "email",
    icon: googleIcon,
  },
  {
    type: "linkedin",
    icon: linkedInIcon,
  },
  {
    type: "github",
    icon: gitHubIcon,
  },
];

function getIcon(type) {
  for (const obj of iconObjs) {
    if (obj.type === type) {
      return obj.icon;
    }
  }
  return null;
}

function ContactCard({ icon, title, link = null, info = null }) {
  return (
    <div
      className="contact-card"
      onClick={() => {
        if (link != null) {
          window.open(link);
        }
      }}
    >
      <img className="contact-icon" src={icon} alt={title} />
      <h2 className="contact-name">{title}</h2>
      <div className="contact-info">{info != null ? info : "Click here"}</div>
    </div>
  );
}

function ContactsSection({ contacts }) {
  return (
    <div className="contacts-section">
      {contacts.map((contact) => {
        return (
          <ContactCard
            key={contact.key}
            icon={getIcon(contact.type)}
            title={contact.contactName}
            info={contact.contactInfo}
            link={contact.contactLink}
          />
        );
      })}
    </div>
  );
}

function ContactsContent({ title, json }) {
  if (json === null) return null;
  return (
    <div className="contacts-content">
      <h1 className="contacts-title">{title}</h1>
      <ContactsSection contacts={json.contacts} />
    </div>
  );
}

export default function ContactsPage() {
  const [contactsJson, setContactsJson] = useState(null);

  useEffect(() => {
    getContacts().then((data) => {
      setContactsJson(data);
    });
  });
  return (
    <div className="contacts-container">
      <ContactsContent title={"Get in touch"} json={contactsJson} />
    </div>
  );
}
