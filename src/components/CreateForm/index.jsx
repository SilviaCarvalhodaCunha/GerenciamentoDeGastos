import React, { useState } from "react";
import styles from "./style.module.css"

export function CreateForm({addToCard}) {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    option: "Entrada",
  });

  function submit(event) {
    event.preventDefault();

    if (formData.description !== "" && formData.value !== "") {
      addToCard(formData);
    }

    setFormData({
      description: "",
      value: "",
      option: "Entrada",
    })
  }

  return (
    <form onSubmit={submit} className={styles.form__container}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={(event) => setFormData({...formData, description: event.target.value})}
        placeholder="Digite aqui sua descrição"
      />
      <span>Ex: Compra de roupas</span>
      <div className={styles.form__containerDiv}>
        <div className={styles.inputValue}>
          <label htmlFor="value">Valor</label>
          <input type="number" name="value" value={formData.value} onChange={(event) => setFormData({...formData, value: event.target.value})} />
        </div>
        <div className={styles.inputOption}>
          <label htmlFor="option">Tipo de valor</label>
          <select name="option" value={formData.option} onChange={(event) => setFormData({...formData, option: event.target.value})}>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}