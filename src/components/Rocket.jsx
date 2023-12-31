import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Rocket = ({ x, y, imageSrc, angle }) => {
  const myRef = useRef();

  return (
    <Wrapper style={{ top: y, left: x }}>
      <img
        src={imageSrc}
        ref={myRef}
        style={{ transform: `rotate(${angle}deg)` }}
        id='image1'
      />
    </Wrapper>
  );
};

export default Rocket;

const Wrapper = styled.div`
  position: absolute;
  img {
    max-width: 250px;
    max-height: 250px;
    object-fit: cover;
  }
`;
