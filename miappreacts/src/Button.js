import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "./botones.css";

export function Button({ text = "Button text" }) {
  return (
    <button
      onClick={function () {
        console.log("Has oprimido un boton");
      }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export function Contador() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    console.log("El estado ha cambiado");
  }, [contador]);

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 10);
        }}
      >
        Incrementar
      </button>
      <br />

      <input
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      ></input>
      <h1>{mensaje}</h1>
    </>
  );
}

export function StyleButton({ text = "texto del boton", type }) {
  let estilo;
  if (type === "ghost") {
    estilo = type;
  } else if (type === "primary") {
    estilo = type;
  }
  return <button className={estilo}>{text}</button>;
}
