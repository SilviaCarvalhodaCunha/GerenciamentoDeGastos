import React, { useState } from "react";
import styles from "./style.module.css";
import logo from "../../assets/logo/Nu Kenzie clear.svg";
import { CreateForm } from "../../components/CreateForm";
import { v4 as uuidv4 } from "uuid";
import { CardList } from "../../components/CardList";
import { TotalValue } from "../../components/TotalValue";

export const Dashboard = ({ setCurrentPage }) => {
  const [listCard, setListCard] = useState([]);
  const [filter, setFilter] = useState("");
  localStorage.setItem('@NuKenzie: card', JSON.stringify(listCard))

  const filteredList = listCard.filter(card => {
    return filter === "" ? true : card.option === filter 
  })

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
          <section className={styles.section__value}>
            {listCard.length > 0 ? (
              <TotalValue list={listCard} />
            ) : (
              console.log("vazio")
            )}
          </section>
        </section>
        <section className={styles.main__containerList}>
          <div className={styles.main__containerDiv}>
            <h2>Resumo financeiro</h2>
            <div className={styles.div__buttons}>
              <button onClick={() => setFilter("")}>Todos</button>
              <button onClick={() => setFilter("Entrada")}>Entradas</button>
              <button onClick={() => setFilter("Despesa")}>Despesas</button>
            </div>
          </div>
          <CardList filteredList={filteredList} removeCard={removeCard} />
        </section>
      </main>
    </>
  );
};
