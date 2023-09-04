import React from "react";
import styled from "styled-components";

export const Loader = () => {
  return (
    <Container>
      <div className="container">
        <div className="mainball">
          <div className="pokebutton"></div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .mainball {
      position: relative;
      width: 350px;
      height: 350px;
      background-color: #fff;
      border: 15px solid #000;
      border-radius: 50%;
      overflow: hidden;
      animation: animate 0.25s ease-in-out, spin 3s ease-in-out 7;
      &::before,
      &::after {
        content: "";
        position: absolute;
      }
      &::before {
        background: red;
        width: 100%;
        height: 50%;
      }
      &::after {
        top: calc(50% - 8px);
        width: 100%;
        height: 15px;
        background: #000;
      }
      .pokebutton {
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        width: 100px;
        height: 100px;
        background: #7f8c8d;
        border: 20px solid #fff;
        border-radius: 50%;
        z-index: 10;
        box-shadow: 0 0 0 20px #000;
        animation: button 3s ease-in-out 7;
      }
    }
  }
  @keyframes animate {
    0% {
      top: -500px;
    }
    50% {
      top: 0px;
    }
    75% {
      top: -30px;
    }
    100% {
      top: 0px;
    }
  }
  @keyframes spin {
    0% {
      transform: rotateZ(0deg);
    }
    50% {
      transform: rotateZ(360deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }
  @keyframes button {
    0% {
      background: #7f8c8d;
    }
    50% {
      background: red;
    }
    100% {
      background: #7f8c8d;
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      .mainball {
        width: 250px;
        height: 250px;
        border: 7px solid #000;
        &::after {
          top: calc(50% - 6px);
          height: 10px;
        }
      }
      .pokebutton {
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        width: 100px;
        height: 100px;
        background: #7f8c8d;
        border: 10px solid #fff;
        border-radius: 50%;
      }
    }
  }
`;
