import React from 'react';
import styled from 'styled-components';
import button1 from '../resources/block1.png';
const ArrowKeys = ({ moveUp, moveLeft, moveDown, moveRight }) => {
  return (
    <Wrapper>
      <div>
        <img src={button1} alt='gamepad top' className='up' onClick={moveUp} />
        <img
          src={button1}
          alt='gamepad left'
          className='left'
          onClick={moveLeft}
        />
        <img
          src={button1}
          alt='gamepad bottom'
          className='down'
          onClick={moveDown}
        />
        <img
          src={button1}
          alt='gamepad right'
          className='right'
          onClick={moveRight}
        />
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
