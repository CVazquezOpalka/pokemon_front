import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../redux/actions";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [buscar, setBuscar] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setBuscar(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (buscar.trim() === "") {
      alert("Debes ingresar el nombre de un pokemon");
      return;
    }
    dispatch(getPokemonByName(buscar));
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Busca a tu pokemon por nombre..."
        onChange={handleChange}
      />
      <button onClick={handleSearch}>
      {"🔍"}
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    display: flex;
    width: 70%;
    margin: 0 auto;
    height: 80%;
    font-size: 0.9rem;
    border: none;
    outline: none;
  }
  button {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid black;
    font-weight: 500;
    font-size: 1.4rem;
    border: none;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
