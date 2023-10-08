import { useEffect, useState, useRef } from 'react';
import Planet from '../components/Planet.jsx';
import ArrowKeys from '../components/ArrowKeys.jsx';
import ExitButton from '../components/ExitButton.jsx';
import styled from 'styled-components';
import sky from '../resources/skyremoved.png';
import ship from '../resources/rocket.png';
import Rocket from '../components/Rocket';
import WellDoneMessage from '../components/WellDoneMessage.jsx';

// planet imports
import planet1 from '../resources/saturn.png';
import planet2 from '../resources/pplanet.png';
import coinSound from '../resources/coin.mp3';
import speakText from "../components/speakText";

const SpaceGame = () => {
  const [objectX, setObjectX] = useState(0);
  const [objectY, setObjectY] = useState(0);
  const [planetX, setPlanetX] = useState(0);
  const [planetY, setPlanetY] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(90);
  const [planet, setPlanet] = useState(planet1);
  const [spaceFact, setSpaceFact] = useState(
    'Did you know one million Earths could fit inside the Sun'
  );

  const coinAudio = new Audio(coinSound);

  // Function to play the popping sound
  const playWinSound = () => {
    coinAudio.loop = false;
    coinAudio.play();
  };

  // will close well done message to start next level
  useEffect(() => {
    if (showMessage) {
    }
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }, [showMessage]);

  const generatePlanet = () => {
    let index = Math.floor(Math.random() * 2);
    if (index == 1) {
      setPlanet(planet2);
    } else {
      setPlanet(planet1);
    }
  };

  const changeFact = () => {
    if (
      spaceFact === 'Did you know one million Earths could fit inside the Sun'
    ) {
      setSpaceFact(
        ' If you could fly a plane to Pluto, the trip would take more than 800 years!'
      );
    } else {
      setSpaceFact('Did you know one million Earths could fit inside the Sun');
    }
  };

  const resetGame = () => {
    generateShipStartPosition();
    generatePlanet();
    changeFact();
    generatePlanetStartPosition();
  };

  useEffect(() => {
    if (!showMessage) resetGame();
  }, [showMessage]);

  const generateShipStartPosition = () => {
    setObjectX(Math.floor(Math.random() * (400 - 50 + 1)) + 50);
    setObjectY(Math.floor(Math.random() * (300 - 50)) + 50);
  };

  const generatePlanetStartPosition = () => {
    setPlanetX(Math.floor(Math.random() * (1400 - 800 + 1)) + 800);
    setPlanetY(Math.floor(Math.random() * (700 - 50)) + 50);
  };

  const checkCollision = () => {
    if (!showMessage) {
    }
    const image1 = document.getElementById('image1').getBoundingClientRect();
    const image2 = document.getElementById('image2').getBoundingClientRect();

    if (
      image1.x < image2.x + image2.width &&
      image1.x + image1.width > image2.x &&
      image1.y < image2.y + image2.height &&
      image1.y + image1.height > image2.y
    ) {
      console.log('Collision detected!');
      setShowMessage(true);
      playWinSound();
      speakText("Well done.");
    } else {
      console.log('No collision.');
    }
  };

  // handlers to move object across the screen activated on button press
  const handleMoveUp = () => {
    if (!showMessage) {
      // move planet up the frame by 10px
      setObjectY((prevY) => prevY - 40);
      setRotateAngle(0);
      checkCollision();
    }
  };
  const handleMoveLeft = () => {
    if (!showMessage) {
      // move planet up the frame by 10px
      setObjectX((prevX) => prevX - 40);
      setRotateAngle(270);
      checkCollision();
    }
  };
  const handleMoveDown = () => {
    if (!showMessage) {
      // move planet up the frame by 10px
      setObjectY((prevY) => prevY + 40);
      setRotateAngle(180);
      checkCollision();
    }
  };
  const handleMoveRight = () => {
    if (!showMessage) {
      // move planet up the frame by 10px
      setObjectX((prevX) => prevX + 40);
      setRotateAngle(90);
      checkCollision();
    }
  };

  return (
    <Wrapper style={{ backgroundImage: `url(${sky})` }}>
      <ExitButton />
      {showMessage && <WellDoneMessage />}
      {!showMessage && (
        <Rocket x={objectX} y={objectY} imageSrc={ship} angle={rotateAngle} />
      )}
      {!showMessage && <Planet x={planetX} y={planetY} imageSrc={planet} />}
      <ArrowKeys
        moveUp={handleMoveUp}
        moveLeft={handleMoveLeft}
        moveDown={handleMoveDown}
        moveRight={handleMoveRight}
      />
      <h1 className='spaceFact' onClick={() => speakText(spaceFact)}>Fun Fact: {spaceFact}</h1>
    </Wrapper>
  );
};

export default SpaceGame;

const Wrapper = styled.div`
  background-size: cover;
  position: relative;
  /* background-color: #000; */
  height: 100vh;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  .spaceFact {
    font-size: 2.5em;
    position: absolute;
    color: white;
    bottom: 0;
    left: 50%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;
