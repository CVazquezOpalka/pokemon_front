import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavBar, Footer } from "./components/index";
import {
  LandingPage,
  HomePage,
  CreatePage,
  DetailPage,
  Favorites,
  ErrorPage,
} from "./pages/index";
import { getTypes, getPokemons } from "./redux/actions";

function App() {
  //logica del componente
  const dispatch = useDispatch();
  const location = useLocation();

  //carga el estado inicial de tipos y los pokemones
  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, [dispatch]);
  const showNavbar = location.pathname === "/home";
  const showFooter = location.pathname === "/home";
  return (
    <>
      {showNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/createPokemon" element={<CreatePage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
