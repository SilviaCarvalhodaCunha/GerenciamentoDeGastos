import React from "react";
import noCard from "../../assets/NoCard.svg"
import styles from "./style.module.css"

export function ListCardEmpty() {
    return (
        <div className={styles.div__cardEmpty}>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <img src={noCard} alt="card empty" />
            <img src={noCard} alt="card empty" />
            <img src={noCard} alt="card empty" />
        </div>
    )
}