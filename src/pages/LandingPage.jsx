import React from "react";
import styled from "styled-components";
import Gengar from "../assets/image/gengar.png";
import Blastoise from "../assets/image/blastoise.png";
import Charizard from "../assets/image/charizard.png";
import Bulbasaur from "../assets/image/bulbasaur.png";
import Squirtle from "../assets/image/squirtle.png";
import Charmander from "../assets/image/charmander.png";
import Venasaur from "../assets/image/venasaur.png";
import TitleBanner from "../assets/image/mejor.png";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="container-pokeball">
        <div className="title">
          <img src={TitleBanner} alt="" className="title" />
        </div>
        <div className="btn">
          <button
            style={{ textTransform: "uppercase" }}
            onClick={() => navigate("/home")}
          >
            ingresar
          </button>
        </div>
        <img
          style={{ width: "120px" }}
          src={Bulbasaur}
          alt="imagen de pokemon"
          className="bulbasaur"
        />
        <img
          style={{ width: "100px" }}
          src={Squirtle}
          alt="imagen de pokemon"
          className="squirtle"
        />
        <img
          style={{ width: "150px" }}
          src={Charmander}
          alt="imagen de pokemon"
          className="charmander"
        />
        <div className="footer">
          <h4>Hecho por Cristian Vazquez Para Henry </h4>
        </div>
      </div>
      <img
        style={{ width: "150px" }}
        src={Gengar}
        alt="imagen de pokemon"
        className="gengar"
      />
      <img
        style={{ width: "150px" }}
        src={Blastoise}
        alt="imagen de pokemon"
        className="blastoise"
      />
      <img
        style={{ width: "150px" }}
        src={Charizard}
        alt="imagen de pokemon"
        className="charizard"
      />
      <img
        src={Venasaur}
        style={{ width: "200px" }}
        alt="imagen de pokemon"
        className="venasaur"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(red, white);
  .gengar {
    position: absolute;
    top: 5%;
    left: 5%;
  }
  .blastoise {
    position: absolute;
    bottom: 5%;
    left: 5%;
  }
  .charizard {
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
  .venasaur {
    position: absolute;
    right: 5%;
    top: 0%;
  }
  .container-pokeball {
    position: relative;
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .squirtle {
      position: absolute;
      bottom: 20%;
      left: 40%;
    }
    .btn {
      position: absolute;
      top: 40%;
      left: 40%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      button {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: none;
        transition: 0.5s;
        background-color: #fff;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .title {
      position: absolute;
      top: -40px;
      left: 25%;
      img {
        width: 400px;
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 90%;
      text-align: center;
      margin: 0 auto;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 46%;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: black;
  }
  @media (max-width: 767px) {
    .gengar {
      display: none;
    }
    .venasaur {
      display: none;
    }
    .charizard {
      display: none;
    }
    .blastoise {
      display: none;
    }
    .container-pokeball {
      .title {
        top: -10%;
        left: 10%;
        img {
          width: 300px;
        }
      }
      .footer {
        width: 100%;
        .h4 {
          text-align: center;
        }
      }
      .bulbasaur {
        position: absolute;
        right: -10%;
        top: 25%;
      }
      .charmander {
        position: absolute;
        left: -10%;
        top: 20%;
      }
    }
  }
  @media (max-width: 500px) {
    .container-pokeball {
      width: 100%;
      .title {
        top: -10%;
        left: 25%;
        img {
          width: 250px;
        }
      }
      .footer {
        width: 100%;
        .h4 {
          text-align: center;
        }
      }
      .bulbasaur {
        position: absolute;
        right: 0%;
        top: 24%;
      }
      .charmander {
        position: absolute;
        left: 0%;
        top: 20%;
      }
    }
  }
`;
