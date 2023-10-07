import React from 'react';
import styled from 'styled-components';
import {Router, useNavigate} from "react-router-dom";

const ExitButton = () => {
    const navigate = useNavigate();

  return (
    <Wrapper>
        <div>
            <button onClick={() => {navigate("/home")}}>X</button>
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
  button {
    font-size: 40px;
    
    height: inherit;
    width: inherit;
    border-radius: inherit;
  }
`;
