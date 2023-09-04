import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createPokemon } from "../redux/actions";
import { Loader } from "./Loader";

export const PokeForm = () => {
  //logica del componente
  const dispatch = useDispatch();
  const option = useSelector((state) => state.types);
  const createStatus = useSelector((state) => state.createStatus);
  //imagenes que se renderizan al costadoen forma de una targeta de presentacion
  const image1 =
    "https://raw.githubusercontent.com/MartaFagundez/pokedex-frontend/main/src/images/pk1.png";
  const image2 =
    "https://raw.githubusercontent.com/MartaFagundez/pokedex-frontend/main/src/images/pk2.png";
  const image3 =
    "https://raw.githubusercontent.com/MartaFagundez/pokedex-frontend/main/src/images/pk3.png";
  const image4 =
    "https://raw.githubusercontent.com/MartaFagundez/pokedex-frontend/main/src/images/pk4.png";
  const image5 =
    "https://raw.githubusercontent.com/MartaFagundez/pokedex-frontend/main/src/images/pk5.png";

  const [mostrarImagen, setMostrarImagen] = useState(
    "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_640.png"
  );
  const [selectTipo1, setSelectTipo1] = useState(null);
  const [selectTipo2, setSelectTipo2] = useState(null);

  const [data, setData] = useState({
    name: "",
    image: null,
    vida: 0,
    fuerza: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    tipos: [],
  });

  const [errors, setErrors] = useState({});

  const validar = (input) => {
    let errors = {};
    if (!input.name) {
      errors.n1 = "El nombre del pokemon es obligatorio";
    }
    if (input.name.length > 15) {
      errors.n2 = "El nombre no debe ser mayor de 15 caracteres";
    }
    if (input.tipos.length === 0) {
      errors.t = "Seleccione al menos un tipo";
    }

    return errors;
  };

  const handleSelectImage = (e) => {
    setMostrarImagen(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectedType1 = (e) => {
    const { value } = e.target;
    setSelectTipo1(value);
    setData({
      ...data,
      tipos: [value],
    });
    setErrors(
      validar({
        ...data,
        tipos: [value],
      })
    );
  };
  const handleSelectedType2 = (e) => {
    const { value } = e.target;
    setSelectTipo2(value);
    setData({
      ...data,
      tipos: [...data.tipos, value],
    });
  };
  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.name !== "name") {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    } else {
      if (e.target.name === "name") {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
        setErrors(
          validar({
            ...data,
            [e.target.name]: e.target.value,
          })
        );
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPokemon(data));
    setData({
      name: "",
      vida: 0,
      fuerza: 0,
      defensa: 0,
      velocidad: 0,
      altura: 0,
      peso: 0,
      tipos: [],
    });
    setSelectTipo1(null);
  };

  const renderLoader = () => (
    <div className="container_loader">
      <h3>Creando Pokemon</h3>
      <Loader />
    </div>
  );

  return (
    <Container>
      {createStatus ? (
        renderLoader()
      ) : (
        <>
          <div className="card_container">
            <div className="img_box">
              <img src={mostrarImagen} alt="imagen de muestra" />
            </div>
            <div className="card_context">
              <h3>
                Vida: <span>{data.vida}</span>
              </h3>
              <h3>
                fuerza: <span>{data.fuerza}</span>
              </h3>
              <h3>
                defensa: <span>{data.defensa}</span>
              </h3>
              <h3>
                velocidad: <span>{data.velocidad}</span>
              </h3>
              <h3>
                peso: <span>{data.peso}</span>
              </h3>
              <h3>
                altura: <span>{data.altura}</span>
              </h3>
            </div>
          </div>
          <div className="form_container_values">
            <div className="selected_image">
              <h3>seleccione una image</h3>
              <select name="image" onChange={handleSelectImage}>
                <option value="">seleccion de imagenes</option>
                <option value={image1}>avatar 1</option>
                <option value={image2}>avatar 2</option>
                <option value={image3}>avatar 3</option>
                <option value={image4}>avatar 4</option>
                <option value={image5}>avatar 5</option>
              </select>
            </div>
            <form
              action="POST"
              className="form_container"
              onSubmit={handleSubmit}
            >
              <div className="name_container">
                <label>
                  Nombre
                  <input
                    type="text"
                    placeholder="ingresa el nombre de tu pokemon"
                    name="name"
                    value={data.name}
                    onChange={handleInput}
                    required
                  />
                </label>
                {errors.n1 ? (
                  <p className="danger_n1">{errors.n1}</p>
                ) : errors.n2 ? (
                  <p className="danger_n2">{errors.n2}</p>
                ) : (
                  false
                )}
              </div>

              <div className="container_type_selector">
                <div className="type_selector">
                  <label>
                    1º Tipo
                    <select
                      defaultValue="default"
                      name="tipo1"
                      value={
                        data.tipos.length >= 1
                          ? data.tipos.length[0]
                          : selectTipo1
                      }
                      onChange={handleSelectedType1}
                      required
                    >
                      <option disabled selected value="default">
                        Tipo 1
                      </option>
                      {option
                        .filter((e) => e.id !== 19)
                        .map((e) => (
                          <option key={e.id} value={e.id}>
                            {e.name}
                          </option>
                        ))}
                    </select>
                  </label>
                  {errors.t ? <p className="danger_t">{errors.t}</p> : false}
                </div>
                <div className="type_selector">
                  {selectTipo1 ? (
                    <label>
                      2º Tipo
                      <select
                        onChange={handleSelectedType2}
                        defaultValue="default"
                        name="tipo2"
                        value={
                          data.tipos.length === 2
                            ? data.tipos.length[1]
                            : selectTipo2
                        }
                      >
                        <option
                          disabled
                          selected={!selectTipo2}
                          defaultValue="default"
                        >
                          Tipo 2
                        </option>
                        {option
                          .filter(
                            (e) => e.id !== Number(selectTipo1) && e.id !== 19
                          )
                          .map(({ name, id }) => (
                            <option value={id} key={id}>
                              {name}
                            </option>
                          ))}
                      </select>
                    </label>
                  ) : null}
                </div>
              </div>
              <div className="container_points_range">
                <label>
                  vida
                  <input
                    onChange={handleInput}
                    name="vida"
                    defaultValue={data.vida}
                    type="range"
                    min="1"
                    max="100"
                  />
                </label>
                <label>
                  fuerza
                  <input
                    onChange={handleInput}
                    name="fuerza"
                    defaultValue={data.fuerza}
                    type="range"
                    min="1"
                    max="100"
                  />
                </label>
                <label>
                  defensa
                  <input
                    onChange={handleInput}
                    name="defensa"
                    defaultValue={data.defensa}
                    type="range"
                    min="1"
                    max="100"
                  />
                </label>
                <label>
                  velocidad
                  <input
                    onChange={handleInput}
                    name="velocidad"
                    defaultValue={data.velocidad}
                    type="range"
                    min="1"
                    max="100"
                  />
                </label>
                <label>
                  peso
                  <input
                    name="peso"
                    defaultValue={data.peso}
                    onChange={handleInput}
                    type="range"
                    min="1"
                    max="100"
                  />
                </label>
                <label>
                  altura
                  <input
                    name="altura"
                    defaultValue={data.altura}
                    onChange={handleInput}
                    type="range"
                    min="1"
                    max="100"
                  />
                </label>
              </div>
              <div className="btnCrear">
                <button>Crear</button>
              </div>
            </form>
          </div>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  .container_loader {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    h3 {
      color: #fff;
    }
  }
  .card_container {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #fff;
    .img_box {
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }
    .card_context {
      margin-left: 10px;
      width: 100%;
      height: calc(100% - 300px);
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      color: #fff;
      h3 {
        text-transform: capitalize;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
        span {
          font-weight: 700;
        }
      }
    }
    .type_content {
      width: 100%;
      height: 100px;
      span {
        display: inline-block;
        padding: 10px 20px;
        text-align: center;
      }
    }
  }
  .form_container_values {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    .selected_image {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 35px;
      h3 {
        color: #fff;
        text-transform: capitalize;
        text-decoration: underline;
        font-weight: 400;
      }
      select {
        color: #fff;
        background: none;
        border: 1px solid #fff;
        height: 30px;
        border-radius: 10px;
        width: 200px;
        text-align: center;
      }
    }
    .form_container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      justify-content: space-around;
      .danger_n2,
      .danger_n1 {
        position: absolute;
        top: 70px;
        left: 310px;
        text-align: center;
        color: red;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
      }
      .danger_n1 {
        left: 345px;
      }
      .danger_t {
        position: absolute;
        top: 140px;
        left: 390px;
        text-align: center;
        color: red;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
      }
      .btnCrear {
        position: absolute;
        right: 20px;
        bottom: 50%;
        button {
          padding: 5px 10px;
          background: none;
          border: 1px solid #fff;
          border-radius: 10px;
          transition: 0.3s ease;
          color: #fff;
          text-transform: uppercase;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      .name_container {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .danger {
          visibility: visible;
          color: red;
          font-weight: 500;
          font-size: 16px;
        }
        .safe {
          visibility: hidden;
        }
        label {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: #fff;
          text-transform: uppercase;
          font-weight: 400;
          input {
            width: 350px;
            height: 35px;
            background: none;
            border: 1px solid #fff;
            border-radius: 10px;
            color: #fff;
            text-align: center;
          }
        }
      }
      .container_type_selector {
        width: 70%;
        height: 50px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .type_selector {
          width: 40%;
          height: auto;
          display: flex;
          label {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            text-transform: uppercase;
            text-decoration: underline;
            select {
              color: #fff;
              background: none;
              border: 1px solid #fff;
              height: 25px;
              width: 90px;
              text-align: center;
            }
          }
        }
      }
      .container_points_range {
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        label {
          width: 80%;
          height: 30px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          color: #fff;
          text-transform: uppercase;
          text-decoration: underline;
        }
      }
    }
  }
`;
