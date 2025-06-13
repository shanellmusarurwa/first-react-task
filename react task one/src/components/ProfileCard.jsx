import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, image, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p>{bio}</p>

      <div className="contact-info">
        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
};

export default ProfileCard;
