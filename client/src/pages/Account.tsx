import "./Account.css";
import "./MainMenu.css";
import { useState, useEffect } from "react";

function Account() {
    const [accountInfo, setAccountInfo] = useState({
        name: "",
        email: "",
        preferences: "",
        allergies: "",
        restrictions: "",
    });

    useEffect(() => {
        setAccountInfo({
            name: "Anirudh",
            email: "anir2212@gmail.com",
            preferences: "Seafood and Milkshakes",
            allergies: "Peanuts",
            restrictions: "None",
        });
    }, []);

    return (
        <div className="main-menu">
            <div className="account-container">
                <img
                    src="images/parch.jpg"
                    alt="account-information"
                    className="parch"
                />
                <div className="account-details">
                    <label>Name:</label>
                    <input type="text" value={accountInfo.name} readOnly />

                    <label>Email:</label>
                    <input type="text" value={accountInfo.email} readOnly />

                    <label>Preferences:</label>
                    <input type="text" value={accountInfo.preferences} readOnly />

                    <label>Allergies:</label>
                    <input type="text" value={accountInfo.allergies} readOnly />
                    <label>Special Restrictions:</label>
                    <input type="text" value={accountInfo.restrictions} readOnly />
                </div>
            </div>
        </div>
    );
}

export default Account;
