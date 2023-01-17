import React from "react";
import ContactItem from "./ContactItem";
import contacts from "../contacts";
import styles from "./ContactDetails.module.scss";

const ContactDetails = () => {
  return (
    <section className={styles["contact-details"]}>
      <hr />
      <h3>Contact Details</h3>
      {/* Looping over contact details to render them in cards. */}
      {contacts.map((contactItem, index) => (
        <ContactItem
          key={index}
          office={contactItem.office}
          mail={contactItem.mail}
          address={contactItem.address}
          phone={contactItem.phone}
          contactItem={contactItem}
        />
      ))}
    </section>
  );
};

export default ContactDetails;
