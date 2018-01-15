import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({contacts}) => (
  <div className="ContactList">
    {contacts.map((contact, idx) => {
      return <ContactItem key={idx} {...contact} />;
    })}
  </div>
);

export default ContactList;