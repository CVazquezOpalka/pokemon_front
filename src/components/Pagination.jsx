import React from "react";
import styled from "styled-components";
import { BotonRedondo } from "../assets/styles/style";
import { useSelector } from "react-redux";

export const Pagination = ({
  totalPages,
  onPrev,
  onNext,
  pages,
  fastPrev,
  fastNext,
}) => {
  const pokemonSearchState = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.isLoading);
  const searchLoading = useSelector((state) => state.searchLoading);
  const error = useSelector((state) => state.error);

  const renderPagination = () => {
    if (searchLoading) {
      return <h3>Buscando Pokemon ...</h3>;
    }
    if (loading) {
      return <h3>Cargando Paginado...</h3>;
    }
    if (pokemonSearchState.id) {
      return <h3>Pokémon encontrado</h3>;
    }

    if (!totalPages || loading) {
      return <h3>{error ? error : "Cargando Paginado..."}</h3>;
    }

    return (
      <>
        {pages > 1 && (
          <>
            <BotonRedondo onClick={fastPrev}>{"<<"}</BotonRedondo>
            <BotonRedondo onClick={onPrev}>{"<"}</BotonRedondo>
          </>
        )}
        <h3>
          <span>{pages}</span> de <span>{totalPages}</span>
        </h3>
        {pages !== totalPages && (
          <>
            <BotonRedondo onClick={onNext}>{">"}</BotonRedondo>
            <BotonRedondo onClick={fastNext}>{">>"}</BotonRedondo>
          </>
        )}
      </>
    );
  };

  return <Container>{error !== null ? null : renderPagination()}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-right: 50px;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  transition: all 0.3s;
  h3 {
    transition: all 0.3s;
    font-size: 18px;
    letter-spacing: 1px;
  }
`;
