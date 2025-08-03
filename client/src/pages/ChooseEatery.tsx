import TextBox from "../components/TextBox";
import "./ChooseEatery.css";
import "./MainMenu.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function ChooseEatery() {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("match");
  const oneBigInput = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    const keywords = await fetch(
      `https://jamestorivor-nextbite-dockers.hf.space/generate?text=${encodeURIComponent(
        oneBigInput.current?.value ?? ""
      )}`
    );
    // Output is in the form of a JSON list for now, with the tokens. Probably need to preprocess the data here.
    const output = JSON.parse(await keywords.json());

    if (output.length === 0) {
      alert("We can't find anything that matches your preferences.");
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
      console.log(output);
      const res = await fetch(
        "https://nextbite-aq1f.onrender.com/api/restaurants/search",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            keywords: output,
            sortOption,
            location: userLocation,
          }),
        }
      );
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
      // const chosen = data[Math.floor(Math.random() * data.length)];
      console.log(chosen);

      navigate("/random", { state: { restaurant: chosen } });
    } catch (err) {
      console.error("Fetch failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="main-menu">
      <div className="choose-eatery-page">
        <h1>Please tell me what you feel like eating today!</h1>
        <TextBox
          placeholder="tell me here!"
          type="preferences"
          ref={oneBigInput}
          style=""
        ></TextBox>
        <button className="choose-eatery-btn" onClick={handleSearch}>
          Search
        </button>
        <select
          className="sort-dropdown"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="match">
            Sort by Most Number of Preferences Matched
          </option>
          <option value="distance">Sort by Closest To You</option>
        </select>

        {/* <div className="left-side">
          <h1>Please tell me what you feel like eating today!</h1>
          <TextBox
            placeholder=""
            type="preferences"
            ref={oneBigInput}
          ></TextBox>
          <select
            className="sort-dropdown"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="match">
              Sort by Most Number of Preferences Matched
            </option>
            <option value="distance">Sort by Closest To You</option>
          </select>

          <button className="back-btn" onClick={() => navigate("/menu")}>
            Back to menu
          </button>

        </div>
        <div className="right-side"></div> */}
      </div>
      <button className="back-btn" onClick={() => navigate("/menu")}>
        Back to menu
      </button>
    </div>
  );
}

export default ChooseEatery;
