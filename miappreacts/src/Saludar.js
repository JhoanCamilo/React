import "./cards.css";
import { useState } from "react";

export function Saludo({ text }) {
  return <h1 className="titulo">{text}</h1>;
}

export function UserCard({ name, amount, married, address }) {
  return (
    <div className="Container">
      <h1>{name}</h1>
      <h3>${amount}</h3>
      <p>Casado: {married ? "Si" : "No"}</p>
      <p>Dirección:</p>
      <ul>
        <li>Calle: {address.street}</li>
        <li>Ciudad: {address.city}</li>
      </ul>
    </div>
  );
}

export function TaskCard() {
  let [estado, setEstado] = useState(false);
  return (
    <div className={`TaskCard ${estado ? "Task-true" : "Task-false"}`}>
      <h1>Tarea</h1>
      <p>Estado de la tarea: {estado ? "Realizada" : "Pendiente"}</p>
      <div>
        <button
          className="CardButton Pendiente"
          onClick={() => {
            setEstado(estado = false);
          }}
        >
          Pendiente
        </button>
        <button
          className="CardButton Realizado"
          onClick={() => {
            setEstado(estado = true);
          }}
        >
          Realizado
        </button>
      </div>
    </div>
  );
}
