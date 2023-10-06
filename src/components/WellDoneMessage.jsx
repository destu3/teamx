import React from 'react';
import styled from 'styled-components';

const WellDoneMessage = () => {
  return (
    <Wrapper>
      <h1>Well Done!!!</h1>
    </Wrapper>
  );
};

export default WellDoneMessage;

const Wrapper = styled.div`
  font-size: 3em;
  position: absolute;
  color: white;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
