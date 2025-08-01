import "./Account.css";
import "./MainMenu.css";
import { useState, useEffect } from "react";

import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase"; 

function Account() {
    const [accountInfo, setAccountInfo] = useState({
        name: "",
        email: "",
        preferences: "",
        allergies: "",
        restrictions: "",
    });

    useEffect(() => {
    const fetchAccountInfo = async () => {
      if (!auth.currentUser) 
        return; 

      const uid = auth.currentUser.uid;
      const userDocRef = doc(db, "users", uid);

      try {
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setAccountInfo({
            name: data.name || "",
            email: data.email || auth.currentUser.email || "",
            preferences: data.preferences || "",
            allergies: data.allergies || "",
            restrictions: data.restrictions || "",
          });
        } else {
          console.log("No such user");
        }
      } catch (error) {
        console.error("Error getting info from user", error);
      }
    };

    fetchAccountInfo();
  }, []);

    return (
        <div className="main-menu">
            <div className="account-container">
                <img
                    src="/images/parch.jpg"
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