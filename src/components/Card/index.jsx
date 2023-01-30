import React from "react";
import trash from "../../assets/trash/trash-black.svg";
import styles from "./style.module.css";

export function Card({ card, removeCard }) {
  return (
    <>
      {card.option === "Entrada" ? (
        <li className={styles.li__containerEntry}>
          <h2>{card.description}</h2>
          <span>{card.option}</span>
          <div className={styles.li__div}>
            <p>R$ {card.value}</p>
            <button onClick={() => removeCard(card.id)}>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </li>
      ) : (
        <li className={styles.li__containerExpense}>
          <h2>{card.description}</h2>
          <span>{card.option}</span>
          <div className={styles.li__div}>
            <p>R$ {card.value}</p>
            <button onClick={() => removeCard(card.id)}>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </li>
      )}
    </>
  );
}
