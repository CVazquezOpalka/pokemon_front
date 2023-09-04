import React from "react";
import styled from "styled-components";
import { PokeForm } from "../components/PokemonForm";
import Image from "../assets/image/fondo.jpeg";
import { BTNGoBack } from "../assets/styles/style";
import { useNavigate } from "react-router-dom";

export const CreatePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={Image} alt="" className="background" />
      <div className="container_form">
        <div className="btn_goback">
          <BTNGoBack
            border={true.toString()}
            color={true.toString()}
            onClick={() => navigate("/home")}
          >
          {"<"}
          </BTNGoBack>
        </div>
        <div className="title_form">
          <h1>Crea a tu propio pokemon</h1>
        </div>
        <div className="form">
          <PokeForm />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -10;
  }

  .container_form {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    position: relative;
    .btn_goback {
      position: absolute;
      top: 35px;
      left: 25px;
      width: 50px;
      height: 50px;
    }
    .title_form {
      margin-top: 30px;
      margin-bottom: 15px;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        width: 100%;
        height: auto;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-decoration: underline;
      }
    }
    .form {
      border-radius: 30px;
      overflow: hidden;
      width: 80%;
      height: auto;
      margin: 0 auto;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(10px);
    }
  }
`;
