import "./ChooseEatery.css";
import "./MainMenu.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChooseEatery() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [inputFour, setInputFour] = useState("");
  const [inputFive, setInputFive] = useState("");
  const [inputSix, setInputSix] = useState("");
  const [inputSeven, setInputSeven] = useState("");
  const [inputEight, setInputEight] = useState("");
  const [inputNine, setInputNine] = useState("");
  const [inputTen, setInputTen] = useState("");
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("match");

  

  const handleSearch = async () => {
    const keywords = [
      inputOne, inputTwo, inputThree, inputFour, inputFive,
      inputSix, inputSeven, inputEight, inputNine, inputTen,
    ].filter(word => word.trim() !== "");
    console.log(keywords);

    if (keywords.length === 0) {
      alert("Please enter at least one preference.");
      return;
    }

    let userLocation = null;

    if (sortOption === "distance") {
    try {
      userLocation = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(
          (position) =>
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }),
          (error) => reject(error)
        )
      );
    } catch (err) {
      console.error("loc error:", err);
      alert("Please allow location access");
      return;
    }
  }

    try {
      console.log("searching");
      const res = await fetch("http://localhost:8080/api/restaurants/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          keywords,
          sortOption, 
          location : userLocation
        }),
      });
      console.log("Response status:", res.status);
      if (!res.ok) {
      const errorText = await res.text();
      console.error("Server returned error:", errorText);
      alert("Server error occurred.");
      return;
    }

      const data = await res.json();
      console.log("Response data:", data);

      if (data.length === 0) {
        alert("No matching restaurants found.");
        return;
      }
      
      const chosen = data;
      /*const chosen = data[Math.floor(Math.random() * data.length)];*/
      console.log(chosen);
      
      navigate("/random", { state: { restaurant: chosen} });
    } catch (err) {
      console.error("Fetch failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="main-menu">
      <div className="choose-eatery-page">
        <div className="left-side">
          <img src="images/chit.jpg" alt="Chit" className="chit-image" />
          <input type="text" className="text-box" placeholder="Enter first value" value={inputOne} onChange={(e) => setInputOne(e.target.value)} />
          <input type="text" className="text-box" placeholder="Enter second value" value={inputTwo} onChange={(e) => setInputTwo(e.target.value)} />
          <input type="text" className="text-box" placeholder="Enter third value" value={inputThree} onChange={(e) => setInputThree(e.target.value)} />
          <input type="text" className="text-box" placeholder="Enter fourth value" value={inputFour} onChange={(e) => setInputFour(e.target.value)} />
          <input type="text" className="text-box" placeholder="Enter fifth value" value={inputFive} onChange={(e) => setInputFive(e.target.value)} />
          <input type="text" className="text-box" placeholder="Enter sixth value" value={inputSix} onChange={(e) => setInputSix(e.target.value)} />
          <input type="text" className="text-box" placeholder="Enter seventh value" value={inputSeven} onChange={(e) => setInputSeven(e.target.value)} />
          <input type="text" className="text-box" placeholder="Enter eighth value" value={inputEight} onChange={(e) => setInputEight(e.target.value)} />
          <input type="text" className="text-box" placeholder="Enter ninth value" value={inputNine} onChange={(e) => setInputNine(e.target.value)} />
          <img src="images/anyother.jpg" alt="Any Other" className="anyother-image" />
          <input type="text" className="text-box" placeholder="Any other requests?" value={inputTen} onChange={(e) => setInputTen(e.target.value)} />
          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
          <option value="match">Sort by Most Number of Preferences Matched</option>
          <option value="distance">Sort by Closest To You</option>
</select>
          
          
          <button className = "back-btn" onClick = {() => navigate("/menu")}>Back to menu</button>

          <button className="choose-eatery-btn" onClick={handleSearch}></button>
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  );
}

export default ChooseEatery;
