# PROFILE CARD PROJECT

created 3 profile cards using import function in App.js

```
npm create-react-app profile_card
```
```
cd profile_card
```
```
npm start
```

profilecard.js -->

```
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
```