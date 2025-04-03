"use client";

import React from "react";

import styles from "../styles/anuncios.module.css";

import IconCard from "../components/IconCard";


const  CategoriasPage = () => {

  return (
    <div className={styles.container} style={{ backgroundColor: "#FFFF" }}>
      <div className={styles.anuncios_container}>
        <div className={styles.anuncios_content}>
          <h1 className={styles.anuncios_title}>Anúncios</h1>
          <a className={styles.link} href="#">
            Ver mais
          </a>
        </div>

        <div className={styles.anuncios_section}>
        <IconCard icon="🚀" title="Ficção Científica" />
        <IconCard icon="❤" title="Romance" />
        <IconCard icon="👤" title="Biografia" />
        <IconCard icon="💻" title="Tecnologia" />
        <IconCard icon="🧚‍♀️" title="Fantasia" />
        <IconCard icon="📜" title="História" />
        <IconCard icon="🌱" title="Autoajuda" />
        </div>
        <div className={styles.anuncios_section}>
        <IconCard icon="🔍" title="Mistério" />
        </div>
      </div>
    </div>
  );
}

export default CategoriasPage;
