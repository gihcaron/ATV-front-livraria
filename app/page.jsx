"use client";

import React from "react";
import styles from "../styles/anuncios.module.css";

import AnunciosPage from "../components/anuncios";

import Footer from "../components/Footer";
import LancamentosPage from "../components/lancamentos";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <AnunciosPage />

      <LancamentosPage />

      <Footer />
    </div>
  );
}
