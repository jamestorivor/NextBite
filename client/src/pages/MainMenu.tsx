import "./MainMenu.css";
import { useNavigate } from "react-router";

function MainMenu() {
  const navigate = useNavigate();

  return (
    <div className="main-menu">
      <div className="menu-container">
        <div className="menu-img">
          <img src="images/mainmenu.png" alt="menu" className="max-h-[600px]" />
        </div>
        <button
          className="btn choose"
          onClick={() => navigate("/choose")}
        ></button>
        <button
          className="btn random"
          onClick={() => navigate("/random")}
        ></button>
        <button
          className="btn account"
          onClick={() => navigate("/account")}
        ></button>
        <button
          className="btn settings"
          onClick={() => navigate("/settings")}
        ></button>
      </div>
    </div>
  );
}

export default MainMenu;
