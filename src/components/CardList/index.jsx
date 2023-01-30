import React from "react";
import { Card } from "../Card";
import { ListCardEmpty } from "../ListCardEmpty";
import styles from "./style.module.css";

export function CardList({ filteredList, removeCard }) {
  return (
    <ul className={styles.ul__container}>
      {filteredList.length > 0 ? (
        <>
          {filteredList.map((card, index) => (
            <Card key={index} card={card} removeCard={removeCard} />
          ))}
        </>
        
      ) : (
        <ListCardEmpty />
      )}
    </ul>
  );
}
