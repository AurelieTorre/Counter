import { useState } from "react";
import s from "./style.module.css";
import Counter from "./components/counter/Counter.jsx";

export default function App() {

  return (
    <div>
      <header>
        <h1>Bienvenue à l'association municipale de Trifouilly-les-Oies !</h1>
        <Counter />
      </header>
    </div>
  );

}