import ReactDOM from "react-dom/client";
import { Saludo, TaskCard } from "./Saludar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //La etiqueta <></> sirve para crear un contenedor vacio, cumple la regla de React, pero no crea elementos innecesarios.
  <>
    <Saludo text="Practicas con React JS" />
    <section>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
    </section>
  </>
);
