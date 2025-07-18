import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SampleEatery.css";


/*

function SampleEatery() {
  const location = useLocation();
  const restaurantName = location.state?.restaurant || "No restaurant selected";

  return (
    <div className="eatery-page">
      <div className="blue-rectangle"></div>
      <h1>welcome to my eatery</h1>

      <input
        type="text"
        value={restaurantName}
        readOnly
        className="restaurant-name-box"
        placeholder="Selected restaurant"
      />

      <img
        src="images/samplestall.jpg"
        alt="Sample Stall"
        className="center-image"
      />
    </div>
  );
}

export default SampleEatery;
*/



function SampleEatery() {
  const location = useLocation();
  const navigate = useNavigate();

  const restaurant = location.state?.restaurant;

  useEffect(() => {
    console.log("✅ SampleEatery component mounted");
    console.log("📍 location object:", location);
    console.log("📦 location.state:", location.state);
    console.log("🍽️ location.state.restaurant:", location.state?.restaurant);

    // If no restaurant passed, redirect back
    if (!restaurant) {
      console.warn("🚫 No restaurant data. Redirecting to /choose.");
      navigate("/choose");
    }
  }, [restaurant, location, navigate]);

  if (!restaurant) {
    return null; // Prevent rendering until redirect
  }

  const restaurantName = restaurant.name || "No restaurant selected";

  return (
    <div className="eatery-page">
      <div className="blue-rectangle"></div>
      <h1>welcome to my eatery</h1>

      {/* Debug: Display raw restaurant object as JSON */}
      <pre style={{ background: "#eee", padding: "1rem", borderRadius: "8px" }}>
        Debug Info:<br />
        {JSON.stringify(restaurant, null, 2)}
      </pre>

      <input
        type="text"
        value={restaurantName}
        readOnly
        className="restaurant-name-box"
        placeholder="Selected restaurant"
      />

      <img
        src="images/samplestall.jpg"
        alt="Sample Stall"
        className="center-image"
      />
    </div>
  );
}

export default SampleEatery;
