import React from "react";

const Bouton = ({ texte, onClick }) => {
    return (
      <button onClick={onClick}>
        {texte}
      </button>
    );
  };
  
export default Bouton;