import './MainMenu.css';
import { useNavigate } from 'react-router';


function MainMenu() {
  const navigate = useNavigate();
  
  return (
    <div className="main-menu">
      <div className="menu-container">
        <img
          src="public/images/mainmenu.jpg"
          alt="Menu"
          className="menu-image"
        />

        <button
          className="btn choose"
          onClick={() => navigate('/choose')}
        ></button>
        <button className="btn random"></button>
        <button className="btn account"></button>
        <button className="btn settings"></button>
      </div>
    </div>
  );
}

export default MainMenu;