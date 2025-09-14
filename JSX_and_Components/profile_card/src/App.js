import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  return (

    <div className="App">
      <h1>Profile Card Project</h1>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}> 

        <ProfileCard

        image={"https://cdn.suzukimotorcycle.co.in/public-live/uploads/color-images/original/Mettalic-Matte-Black-SF-250-no-2-Absolute-Side-min_5f6851f4a574c.jpg"}
        name={"Gixxer SF 250"}
        bio={"The Gixxer SF 250 is a fully-faired motorcycle from Suzuki, known for its sporty design and performance. It features a 249cc, single-cylinder, fuel-injected engine that delivers a balance of power and efficiency. The bike is equipped with modern features such as LED lighting, a digital instrument cluster, and dual-channel ABS for enhanced safety."}

        />

        <ProfileCard

        image={"https://imgd.aeplcdn.com/1280x720/n/cw/ec/1/versions/--red-without-quickshifter-obd-2b1744894903832.jpg"}
        name={"Apache RR 310"}
        bio={"The Apache RR 310 is a high-performance sportbike from TVS Motor Company, designed for enthusiasts who crave speed and agility. It is powered by a 312.2cc, single-cylinder, liquid-cooled engine that delivers impressive power and torque, making it suitable for both city rides and highway cruising."}
        />

        <ProfileCard

        image={"https://imgd.aeplcdn.com/1280x720/n/cw/ec/125091/rc-390-right-side-view-2.png?isig=0"}
        name={"KTM RC 390"}
        bio={"The KTM RC 390 is a high-performance sportbike that combines aggressive styling with advanced engineering. It is powered by a 373cc, single-cylinder, liquid-cooled engine that delivers impressive power and torque, making it suitable for both city commuting and spirited rides on twisty roads. "}
        />

      </div>

      
    </div>

  );
}

export default App;
