import React from "react";
import PropTypes from "prop-types";
import "./ProfileCard.css";

function ProfileCard({ name, bio, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-pic" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
}

ProfileCard.defaultProps = {
  name: "Sports Bike"
};

ProfileCard.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProfileCard;
