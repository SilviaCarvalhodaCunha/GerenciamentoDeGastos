import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "../../assets/logo/Nu Kenzie clear.svg";
import { CreateForm } from "../../components/CreateForm";
import { v4 as uuidv4 } from "uuid";
import { CardList } from "../../components/CardList";

export const Dashboard = ({ setCurrentPage }) => {
  const [listCard, setListCard] = useState([]);

  function addToCard(card) {
    const newCard = { ...card, id: uuidv4() };
    setListCard([...listCard, newCard]);
  }

  function removeCard(cardId) {
    const newCardList = listCard.filter((card) => card.id !== cardId);
    setListCard(newCardList);
  }

  return (
    <>
      <header className={styles.header__container}>
        <img src={logo} alt="logo" />
        <button onClick={() => setCurrentPage("")}>Inicio</button>
      </header>

      <main className={styles.main__container}>
        <section className={styles.main__containerForm}>
          <CreateForm addToCard={addToCard} />
        </section>
        <section className={styles.main__containerList}>
          <h2>Resumo financeiro</h2>
          <CardList listCard={listCard} removeCard={removeCard} />
        </section>
      </main>
    </>
  );
};
