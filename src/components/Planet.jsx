import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Planet = ({ x, y, imageSrc }) => {
  const myRef = useRef();

  return (
    <Wrapper style={{ top: y, left: x }}>
      <img src={imageSrc} ref={myRef} id='image2' />
    </Wrapper>
  );
};

export default Planet;

const Wrapper = styled.div`
  position: absolute;
`;
