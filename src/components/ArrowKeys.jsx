import React from 'react';
import styled from 'styled-components';
import upButton from "../resources/upkey.png";
import downButton from "../resources/downkey.png";
import leftButton from "../resources/leftkey.png";
import rightButton from "../resources/rightkey.png";

const ArrowKeys = ({ moveUp, moveLeft, moveDown, moveRight }) => {
  //add key listener so that it also does the function on the arrow keys or wasd
  document.onkeydown = (event) => {
    if (event.key === "ArrowUp" || event.key === "w") moveUp();
    else if (event.key === "ArrowDown" || event.key === "s") moveDown();
    else if (event.key === "ArrowLeft" || event.key === "a") moveLeft();
    else if (event.key === "ArrowRight" || event.key === "d") moveRight();
    else console.log(event.key);
  };


  return (
    <Wrapper>
      <div>
        <img
            src={upButton}
            alt='gamepad top'
            className='up'
            onClick={moveUp} />
        <img
          src={leftButton}
          alt='gamepad left'
          className='left'
          onClick={moveLeft} />
        <img
          src={downButton}
          alt='gamepad bottom'
          className='down'
          onClick={moveDown} />
        <img
          src={rightButton}
          alt='gamepad right'
          className='right'
          onClick={moveRight} />
      </div>
    </Wrapper>
  );
};

export default ArrowKeys;

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  bottom: 3%;
  left: 0%;
  overflow: hidden;
  div {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(2, 200px);
  }
  img {
    user-select: none;
  }
  img:active {
    opacity: 0.5;
  }
  .up {
    grid-area: 1 / 2 / 2 / 3;
  }
  .left {
    grid-area: 2 / 1 / 3 / 2;
  }
  .down {
    grid-area: 2 / 2 / 3 / 3;
  }
  .right {
    grid-area: 2 / 3 / 3 / 4;
  }
`;
