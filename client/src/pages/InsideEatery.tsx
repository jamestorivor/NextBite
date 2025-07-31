import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./InsideEatery.css";





function InsideEatery() {
  const location = useLocation();
  const navigate = useNavigate();

  

  const restaurant = location.state?.restaurant;

  useEffect(() => {
    console.log("InsideEatery page mounted");
    console.log("location object:", location);
    console.log("location.state:", location.state);
    console.log("location.state.restaurant:", location.state?.restaurant);

    
    if (!restaurant) {
      console.warn("No restaurant data going back to choose eatery page");
      navigate("/choose");
    }
  }, [restaurant, location, navigate]);

  if (!restaurant) {
    return null; 
  }

  const restaurantName = restaurant.name || "No restaurant selected";
  const restaurantSpecial = restaurant.specialties || "No specialties specified";
  const restaurantCuisine = restaurant.cuisine_type || "No cuisine type specified";
  const restaurantRating = restaurant.rating || "No rating specified";
  const restaurantMenu = restaurant.image_url || "No menu given";
  const restaurantAddress = restaurant.address || "No address given";


  return (
    <div className="eatery-page">
      
        <img
          src="images/chit2.png"
          alt="Chit paper"
          className="paper-image"
        />
        <div className="image-overlay-text">
          <h2>{restaurantName}</h2>
          <p><strong>Specialties:</strong> {restaurantSpecial}</p>
          <p><strong>Cuisine:</strong> {restaurantCuisine}</p>
          <p><strong>Rating:</strong> {restaurantRating}</p>
      
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <button className="view-button" onClick={() =>{
        console.log("button pressed" + restaurantMenu);
        window.open(restaurantMenu, "_blank");

      } }>View Menu</button>
      <button className ="map-button" onClick={() => 
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantAddress)}`, "_blank")}>

        Show me the way!</button>
      
    </div>
  );
}

export default InsideEatery;
