import React from 'react';
import styled from 'styled-components';

const ExitButton = () => {
  return (
    <Wrapper>
      <div>
        <h1>X</h1>
      </div>
    </Wrapper>
  );
};

export default ExitButton;

const Wrapper = styled.div`
  div {
    position: absolute;
    background-color: grey;
    border-radius: 50px;
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.75;
    margin: 1em;
  }
  div:hover {
    background-color: lightgrey;
  }
  h1 {
    font-size: 40px;
  }
`;
