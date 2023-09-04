import React from "react";
import styled from "styled-components";
import ErrorImage from "../assets/image/error.webp";
import { BotonRectangulo } from "../assets/styles/style";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <picture>
        <img src={ErrorImage} alt="imagen demuestra" />
      </picture>
      <div className="container">
        <div className="go_back">
          <BotonRectangulo onClick={() => navigate("/home")}>
            Preciona aqui pata ir a Home
          </BotonRectangulo>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  .container{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(2px);
    position: relative;
    display: flex;
    .go_back{
        position: absolute;
        bottom: 12%;
        left: 40%;
    }

  }
  picture {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
