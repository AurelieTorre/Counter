import { useState } from "react";
import s from "./style.module.css";
import Bouton from "./components/counter.jsx";

let count = 0;

function App() {

  const [number, setNumber] = useState('0');

  const handleClickAdd = () => {
    count++;
    setNumber(count);
  };

  const handleClickDim = () => {
    {count > 0 && count--}
    setNumber(count);
  };

  const handleClickZero = () => {
    count = 0;
    setNumber(count);
  };

  return (
    <div>
      <h1>Bienvenue citoyenne, citoyen !</h1>
      <h2>Nombre d'inscriptions : {number}</h2>
      <Bouton texte="Ajouter 1" onClick={handleClickAdd} />
      <Bouton texte="Retirer 1" onClick={handleClickDim} />
      <Bouton texte="Remise à zéro" onClick={handleClickZero} />
    </div>
  );

}

export default App;
