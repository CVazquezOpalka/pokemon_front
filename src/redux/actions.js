import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_TYPES,
  FILTER_TYPES,
  SORT_ORDER,
  UPDATE_POKEMON,
  UPDATE_ORDER,
  UPDATE_TYPE,
  UPDATE_ERROR,
  SEARCH_POKEMON_REQUEST,
  SEARCH_POKEMON_SUCCESS,
  SEARCH_POKEMON_FAILURE,
  CREATE_POKEMON_REQUEST,
  CREATE_POKEMON_ACEPTADO,
  CREATE_POKEMON_FALLO,
  UPDATE_LOADING,
} from "./actionTypes";

//FUNCIONES DE LIMPIEZA
export const updateLoading = (payload) => ({
  type: UPDATE_LOADING,
  payload,
});
export const updateError = (payload) => ({
  type: UPDATE_ERROR,
  payload,
});

export const updatePokemon = (payload) => {
  return {
    type: UPDATE_POKEMON,
    payload,
  };
};
export const updateType = (payload) => {
  return {
    type: UPDATE_TYPE,
    payload,
  };
};
export const updateOrder = (payload) => {
  return {
    type: UPDATE_ORDER,
    payload,
  };
};
//CONTROLADOR DE ERRORES DEL SEARCH BAR;

export const searchPokemonRequest = () => ({
  type: SEARCH_POKEMON_REQUEST,
});

export const searchPokemonSuccess = (pokemon) => ({
  type: SEARCH_POKEMON_SUCCESS,
  payload: pokemon,
});

export const searchPokemonFailure = (error) => ({
  type: SEARCH_POKEMON_FAILURE,
  payload: error,
});

// CONROLADOR DEL FORMULARIO DE CREACION

export const createPokemonRequest = () => ({
  type: CREATE_POKEMON_REQUEST,
});

export const createPokemonAceptado = () => ({
  type: CREATE_POKEMON_ACEPTADO,
});

export const createPokemonFallo = () => ({
  type: CREATE_POKEMON_FALLO,
});

//funcion de creacion

export const createPokemon = (pokemonData) => {
  return async (dispatch) => {
    dispatch(createPokemonRequest()); // Iniciar la solicitud
    try {
      const response = await fetch("http://localhost:3001/pokemons", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemonData),
      });

      if (response.status === 400) {
        alert(
          `Ya existe el Pokémon con el nombre ${pokemonData.name.toLowerCase()}`
        );
        throw new Error(
          `Ya existe el Pokémon con el nombre "${pokemonData.name.toLowerCase()}"`
        );
      } else {
        alert("Pokémon creado con éxito");
        dispatch(createPokemonAceptado());
        dispatch(getPokemons()); // Solicitud exitosa
      }
    } catch (error) {
      dispatch(createPokemonFallo(error)); // Error en la solicitud
    }
  };
};

//LLAMADOS A LA API

export function getTypes() {
  return function (dispatch) {
    return fetch("http://localhost:3001/types")
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: GET_TYPES,
          payload: json,
        })
      );
  };
}

/* export function getPokemons() {
  return function (dispatch) {
    return fetch("http://localhost:3001/pokemons")
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: GET_POKEMONS,
          payload: json,
        })
      );
  };
} */
export const getPokemons = () => async (dispatch) => {
  const URL = "http://localhost:3001/pokemons";
  try {
    const response = await fetch(URL);
    if (!response.ok) throw Error("error");
    const data = await response.json();
    dispatch({
      type: GET_POKEMONS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export function getPokemon(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/pokemons/${id}`)
      .then((res) => res.json())
      .then((json) =>
        dispatch({
          type: GET_POKEMON,
          payload: json,
        })
      );
  };
}

/* export function getPokemonByName(name) {
  return function (dispatch) {
    //esta funcion recibe un nombre como argumento y despacha 3 acciones,
    //pone el estado loading en true, error en null
    dispatch(searchPokemonRequest());
    return (
      fetch(`http://localhost:3001/pokemons?name=${name}`)
        //control del error
        .then(async (response) => {
          //primera accion a despachar el manejo de errores, si la respuesta es distinta de ok, obtenemos el error y lo arrojamos al catch
          if (!response.ok) {
            let error;
            try {
              error = await response.json(); //
            } catch (err) {
              //mensaje alternativo
              error = { message: "Error desconocido" }; // Si no se puede extraer, asigno un error genérico
            }
            throw error;
          }
          return response.json();
        })
        .then((pokemon) => {
          dispatch(searchPokemonSuccess(pokemon));
        })
        .catch((error) => {
          dispatch(searchPokemonFailure(error));
        })
    );
  };
} */

export const getPokemonByName = (name) => async (dispatch) => {
  const URL = `http://localhost:3001/pokemons?name=${name}`;
  try {
    dispatch(searchPokemonRequest());
    const response = await fetch(URL);
    if (!response.ok) {
      let errorResponse;
      try {
        errorResponse = await response.json();
      } catch (error) {
        errorResponse = { message: "Algo salio Mal" };
      }
      throw errorResponse;
    }
    const pokemon = await response.json();
    dispatch(searchPokemonSuccess(pokemon));
  } catch (error) {
    dispatch(searchPokemonFailure(error));
  }
};

export const filterTypes = (type) => (dispatch) => {
  dispatch({
    type: FILTER_TYPES,
    payload: type,
  });
};

export function sortOrder(order) {
  return function (dispatch) {
    dispatch({
      type: SORT_ORDER,
      payload: order,
    });
  };
}
