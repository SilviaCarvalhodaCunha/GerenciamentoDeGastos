import React from "react";
import styles from "./style.module.css";
import logo from "../../assets/logo/Nu Kenzie.svg";
import imageHome from "../../assets/imageHome/img home-mobile.svg";

export const Home = ({setCurrentPage}) => {
  return (
    <main>
      <div className={styles.main__container}>
        <div className={styles.main__containerDiv}>
          <img src={logo} alt="logo" />
          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>
          <button className={styles.btnStart} onClick={() => setCurrentPage("dash")}>Iniciar</button>
        </div>
        <div className={styles.imgHome}>
          <img src={imageHome} alt="imagem" />
        </div>
      </div>
    </main>
  );
}