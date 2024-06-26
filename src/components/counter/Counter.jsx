import React, { useState } from "react";
import s from "./style.module.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className={ s.count }>
            <h2>Nombre d'inscriptions à l'activité : {count}</h2>
            <div className={ s.buttons }>
                <button className="btn" onClick={increment}>Ajouter 1</button>
                <button className="btn" onClick={decrement}>Retirer 1</button>
                <button className="btn" onClick={reset}>Remettre à zéro</button>
            </div>
        </div>
    );
};

export default Counter;