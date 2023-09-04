import React from "react";
import styled from "styled-components";
import TitleBanner from "../assets/image/titulon.png";
import { SearchBar } from "./index";
import { useNavigate } from "react-router-dom";
import { BotonNavBar } from "../assets/styles/style";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <header>
        <img src={TitleBanner} alt="logo de la pagina" />
      </header>
      <nav className="container-nav">
        <BotonNavBar onClick={() => navigate("/createPokemon")}>
          Create Pokemon
        </BotonNavBar>
      </nav>
      <div className="search-container">
        <SearchBar />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90vw;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  header {
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 200px;
      z-index: 10;
    }
  }
  .search-container {
    width: 400px;
    height: 50px;
    border: 1px solid #111;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.5);
  }
  .container-nav {
    width: 400px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 767px) {
    margin: 0;
    width: 100%;
    flex-direction: column;
    height: 250px;
    align-items: center;
    justify-content: center;
    .search-container {
      display: flex;
      height: 100px;
      margin-bottom: 15px;
    }
    .container-nav {
      width: 100%;
      ul {
        margin-bottom: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          margin: 0 auto;
          span {
            a {
              letter-spacing: 0.1rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 400px) {
    .search-container {
      display: flex;
      width: 80%;
      height: 100px;
      margin-bottom: 15px;
    }
  }
`;
