/*
import './ChooseEatery.css';
import './MainMenu.css'; 

function ChooseEatery() {
  return (
    <div className="main-menu"> 
      <div className="menu-container">
        <div className="left-side">
          <img
            src="public/images/chit.jpg"  
            alt="Chit"
            className="chit-image"
          />
        </div>
        <div className="right-side">
        </div>
      </div>
    </div>
  );
}


export default ChooseEatery;
*/

import './ChooseEatery.css';
import './MainMenu.css'; 
import { useState } from 'react';

function ChooseEatery() {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [inputThree, setInputThree] = useState('');
  const [inputFour, setInputFour] = useState('');
  const [inputFive, setInputFive] = useState('');
  const [inputSix, setInputSix] = useState('');
  const [inputSeven, setInputSeven] = useState('');
  const [inputEight, setInputEight] = useState('');
  const [inputNine, setInputNine] = useState('');
  const [inputTen, setInputTen] = useState('');


  return (
    <div className="main-menu"> 
      <div className="choose-eatery-page">
        <div className="left-side">
          <img
            src="public/images/chit.jpg"  
            alt="Chit"
            className="chit-image"
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter first value"
            value={inputOne}
            onChange={(e) => setInputOne(e.target.value)}
          />

          <input
            type="text"
            className="text-box"
            placeholder="Enter second value"
            value={inputTwo}
            onChange={(e) => setInputTwo(e.target.value)}
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter third value"
            value={inputThree}
            onChange={(e) => setInputThree(e.target.value)}
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter fourth value"
            value={inputFour}
            onChange={(e) => setInputFour(e.target.value)}
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter fifth value"
            value={inputFive}
            onChange={(e) => setInputFive(e.target.value)}
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter sixth value"
            value={inputSix}
            onChange={(e) => setInputSix(e.target.value)}
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter seventh value"
            value={inputSeven}
            onChange={(e) => setInputSeven(e.target.value)}
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter eighth value"
            value={inputEight}
            onChange={(e) => setInputEight(e.target.value)}
          />
          <input
            type="text"
            className="text-box"
            placeholder="Enter ninth value"
            value={inputNine}
            onChange={(e) => setInputNine(e.target.value)}
          />
          
          <img
            src="public/images/anyother.jpg"
            alt="Any Other"
            className="anyother-image"
          />
          <input
            type="text"
            className="text-box"
            placeholder="Any other requests?"
            value={inputTen}
            onChange={(e) => setInputTen(e.target.value)}
          />
          <button className="btn go"></button>
        </div>
        <div className="right-side">
          
        </div>
      </div>
    </div>
  );
}

export default ChooseEatery;