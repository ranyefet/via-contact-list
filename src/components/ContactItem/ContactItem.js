import React from 'react';
import './ContactItem.css';

const ContactCircle = ({type}) => {
  const className = (type === 'citizen') ? "ContactTypeCitizen" : "ContactTypeProfessional";
  return <div className={`ContactCircle ${className}`}></div>;
};

const ContactImage = ({src}) => {
  if (!src) {
    return <div className="placeholder"></div>;
  }

  return <div class="ContactImageContainer"><img src={src} /></div>;
};

const ContactItem = (props) => {
  console.log('Contact', props);
  const { name, driverType, driverRank, profile_image, email, phone } = props;
  return (
    <div className="ContactItem">
      <div className="ContactImage">
        <ContactImage src={profile_image} />
        <ContactCircle type={driverType} /> 
      </div>
      <div className="ContactDetails">
        <span className="ContactName">{name}</span>
        {driverType && <span className="ContactType">{driverType} #{driverRank}</span>}
        {phone && <span>Phone: {phone}</span>}
        {email && <span>{email}</span>}
      </div>
    </div>
  )
}

export default ContactItem;