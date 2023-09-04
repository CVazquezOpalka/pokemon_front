import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <div className="text_container">
        <h3>App creada por Cristian Vazquez con 🧡 para Henry.</h3>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 40px;
  position: relative;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(5px);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .text_container {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.9px;
      color: #fff;
    }
  }
`;
