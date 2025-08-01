import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SampleEatery.css";





function SampleEatery() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const len = location.state?.restaurant.length;

  const restaurant = location.state?.restaurant[currentIndex];

  useEffect(() => {
    console.log("SampleEatery page mounted");
    console.log("location object:", location);
    console.log("location.state:", location.state);
    console.log("location.state.restaurant:", location.state?.restaurant);

    
    if (!restaurant) {
      console.warn("No restaurant data going back to choose eatery page");
      navigate("/choose");
    }
  }, [restaurant, location, navigate]);

  if (!restaurant) {
    return null; // Prevent rendering until redirect
  }

  const restaurantName = restaurant.name || "No restaurant selected";
  const handleNext = () => {
    if (currentIndex < len - 1) {
      setCurrentIndex(currentIndex + 1);

    }
    else {
      setCurrentIndex(0);
    }
    
  }

  return (
    <div className="eatery-page">
      <div className="blue-rectangle"></div>
      

      
      {/* Debug: Display raw restaurant object as JSON 
      <pre style={{ background: "#eee", padding: "1rem", borderRadius: "8px" }}>
        Debug Info:<br />
        {JSON.stringify(restaurant, null, 2)}
      </pre>
        */}


      <input
        type="text"
        value={restaurantName}
        readOnly
        className="restaurant-name-box"
        placeholder="Selected restaurant"
      />

      <img
        src="/images/samplestall.jpg"
        alt="Sample Stall"
        className="center-image"
      />
      <button className = "next-button"
      onClick = {handleNext}> Next </button>
      <button className = "go-button"
      onClick={() => navigate("/inside", { state: { restaurant } })}
> I choose this! </button>
    </div>
  );
}

export default SampleEatery;