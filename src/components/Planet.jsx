import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Planet = ({ x, y, imageSrc }) => {
  const myRef = useRef();

  useEffect(() => {
    console.log(myRef.current.offsetTop);

    console.log(myRef.current.offsetTop);
  }, []);

  return (
    <Wrapper style={{ top: y, left: x }}>
      <img src={imageSrc} ref={image2Ref} />
    </Wrapper>
  );
};

export default Planet;

const Wrapper = styled.div`
  position: absolute;
`;
