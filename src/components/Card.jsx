import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
      <picture className="head_container">
        <img src={pokemon.image} alt={pokemon.name} />
      </picture>
      <div className="body_container">
        <div className="title">
          <h3>{pokemon.name}</h3>
          <h4>
            {pokemon.id.length > 5
              ? `#${pokemon.id.slice(0, 5)}...`
              : pokemon.id < 10
              ? `#00${pokemon.id}`
              : pokemon.id < 100
              ? `#0${pokemon.id}`
              : `#${pokemon.id}`}
          </h4>
        </div>
        <div className="types">
          {pokemon.tipos?.map((e, index) => (
            <span key={index} className={e.name ? e.name : e}>
              {e.name ? e.name : e}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: ${((props)=>props.alter?"300px":"200px")};
  height: ${((props)=>props.alter?"400px":"300px")};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  opacity: 0.5;
  transition: 0.5s ease-in-out;
  background: radial-gradient(closest-side, rgba(0, 0, 0, 0.4), transparent);
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-20px);
    opacity: 1;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  }
  .head_container {
    margin-top: 10px;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: ${((props)=> props.alter? "200px":"150px")};
      object-fit: cover;
    }
  }
  .body_container {
    margin-top: 20px;
    width: 100%;
    height: calc(100% - 120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      width: 100%;
      height: (100% - 80px);
      text-align: center;
      font-size: 1.3rem;
      text-transform: uppercase;
    }
    .types {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #fff;
      font-weight: 500;
      font-size: 1rem;
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
`;
