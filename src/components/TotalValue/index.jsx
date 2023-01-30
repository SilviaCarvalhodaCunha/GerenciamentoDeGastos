import React from "react";
import styles from "./style.module.css"

export function TotalValue({list}) {
    const valueExpenses = list.map((balance) => {
        if(balance.option === "Despesa"){
            return balance.value
        }
    })

    const filterValueExpenses = valueExpenses.filter(value => value !== undefined)

    const totalExpenses = filterValueExpenses.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0)

    const valueEntry = list.map((balance) => {
        if(balance.option === "Entrada"){
            return balance.value
        }
    })

    const filterValueEntry = valueEntry.filter(value => value !== undefined)

    const totalEntry = filterValueEntry.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue), 0)

    const total = totalEntry - totalExpenses
    
    return (
        <div className={styles.div__container}>
            <h2>Valor total:</h2>
            <p>R$ {total}</p>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}