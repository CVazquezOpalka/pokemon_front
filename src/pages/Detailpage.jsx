import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemon,
  updatePokemon,
  getPokemons,
  updateType,
  updateOrder,
} from "../redux/actions";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { BTNGoBack } from "../assets/styles/style";

export const DetailPage = () => {
  const pokemonState = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClick = () => {
    dispatch(getPokemons());
    navigate("/home");
  };

  const cleanUp = useCallback(() => {
    dispatch(updatePokemon({}));
    dispatch(updateType(""));
    dispatch(updateOrder(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPokemon(id));
    return cleanUp();
  }, [dispatch, id, cleanUp]);

  const renderLoader = () => (
    <ContainerLoader>
      <Loader />
    </ContainerLoader>
  );

  if (pokemonState.id === undefined) {
    return renderLoader();
  }

  return (
    <Container>
      <div className="btn_goback">
        <BTNGoBack onClick={() => handleClick()}>{"<"}</BTNGoBack>
      </div>
      <div className="pokemon_detail_page">
        <div className="page_top">
          <div className="pokeid_pokeTitle">
            <h2>
              <i>
                {pokemonState.id < 10
                  ? `#00${pokemonState.id}`
                  : pokemonState.id < 100
                  ? `#0${pokemonState.id}`
                  : `#${pokemonState.id}`}
              </i>
            </h2>
            <h1>{pokemonState.name}</h1>
            <div className="peso_altura">
              <h3>
                Peso: <span className="peso">{pokemonState.peso} lbs.</span>
              </h3>
              <h3>
                Altura: <span className="altura">{pokemonState.altura}</span>{" "}
                cm.
              </h3>
            </div>
            <div className="types">
              {pokemonState.tipos?.map((e, index) => (
                <span key={index} className={e.name ? e.name : e}>
                  {e.name ? e.name : e}
                </span>
              ))}
            </div>
          </div>
          <div className="container_image">
            <img src={pokemonState?.image} alt={pokemonState.name} />
          </div>
        </div>
        <div className="estadisticas_container">
          <div className="title">
            <h4>Estadisticas:</h4>
          </div>
          <div className="estadisticas">
            <div className="stat-group">
              <span>Hp</span>
              <div className="progress-bar"></div>
              <span className="counter-stat">{pokemonState.vida}</span>
            </div>
            <div className="stat-group">
              <span>Ataque</span>
              <div className="progress-bar"></div>
              <span className="counter-stat">{pokemonState.fuerza}</span>
            </div>
            <div className="stat-group">
              <span>Defensa</span>
              <div className="progress-bar"></div>
              <span className="counter-stat">{pokemonState.defensa}</span>
            </div>
            <div className="stat-group">
              <span>velocidad</span>
              <div className="progress-bar"></div>
              <span className="counter-stat">{pokemonState.velocidad}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
  position: relative;
  .btn_goback {
    position: absolute;
    top: 0;
    left: 25px;
    width: 50px;
    height: 50px;
    button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #111;
      background: none;
      font-size: 1.1rem;
      transition: 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .pokemon_detail_page {
    margin-top: 25px;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    .page_top {
      width: 100%;
      height: 400px;
      display: flex;
      .pokeid_pokeTitle {
        width: 50%;
        height: 200px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        h1 {
          font-size: 3.5rem;
          text-transform: capitalize;
        }
        h2 {
          font-size: 5rem;
          color: var(--color-primary);
          font-weight: 400;
        }
        .peso_altura {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          h3 {
            font-size: 1.1rem;
          }
        }
      }
      .types {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        color: #fff;
        font-weight: 500;
        font-size: 1.5rem;
        text-transform: uppercase;
        span {
          display: block;
          padding: 5px 10px;
          border-radius: 10px;
        }
        .water {
          background-color: var(--color-water);
        }

        .grass {
          background-color: var(--color-grass);
        }

        .poison {
          background-color: var(--color-poison);
        }

        .fire {
          background-color: var(--color-fire);
        }

        .bug {
          background-color: var(--color-bug);
        }

        .dragon {
          background: var(--color-dragon);
        }

        .flying {
          background-color: var(--color-flying);
        }

        .ground {
          background-color: var(--color-ground);
        }

        .steel {
          background-color: var(--color-steel);
        }

        .psychic {
          background-color: var(--color-psychic);
        }

        .ice {
          background-color: var(--color-ice);
        }

        .ghost {
          background-color: var(--color-ghost);
        }

        .normal {
          background-color: var(--color-normal);
        }

        .rock {
          background-color: var(--color-rock);
        }

        .electric {
          background-color: var(--color-electric);
        }

        .fighting {
          background-color: var(--color-fighting);
        }

        .fairy {
          background-color: var(--color-fairy);
        }

        .dark {
          background-color: var(--color-dark);
        }
      }
    }
    .container_image {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-bottom: 20px;
      img {
        width: 350px;
        height: auto;
        object-fit: cover;
      }
    }
    .estadisticas_container {
      width: 80%;
      height: 233px;
      display: flex;
      margin: 0 auto;
      align-items: center;
      .title {
        height: 100%;
        width: 220px;
        display: flex;
        align-items: center;
        justify-content: center;
        h4 {
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: underline;
        }
      }
      .estadisticas {
        height: 100%;
        width: 805px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .stat-group {
          width: 80%;
          height: 46.6px;
          margin: 0 auto;
          margin-right: 0px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 5px;
          span {
            margin: auto 0;
            flex: 30%;
            font-weight: 500;
            font-size: 1.2rem;
            text-transform: uppercase;
            margin-left: 10px;
          }
          .progress-bar {
            margin: auto 0;
            width: 100%;
            height: 15px;
            border-radius: 10px;
            background: lightgreen;
          }
        }
      }
    }
  }
`;

const ContainerLoader = styled.div`
  width: 100;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
