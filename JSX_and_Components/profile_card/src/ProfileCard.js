import React from "react";
import "./ProfileCard.css";

function ProfileCard({ image, name, bio }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-pic" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
}

export default ProfileCard;
