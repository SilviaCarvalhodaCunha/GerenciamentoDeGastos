import React from "react";
import { Card } from "../Card";
import { ListCardEmpty } from "../ListCardEmpty";
import styles from "./style.module.css"


export function CardList({listCard, removeCard}) {
    return (
        <ul className={styles.ul__container}>
            {
                listCard.length > 0 ? (
                    <>
                        {listCard.map((card, index) => ( 
                        <Card key={index} card={card} removeCard={removeCard}/>
                        ))}
                    </>
                ) : (
                    <ListCardEmpty/>
                )
            }
        </ul>
    )    
}