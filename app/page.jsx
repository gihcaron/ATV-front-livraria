"use client";

import React from "react";

import AnunciosPage from "../components/anuncios";
import Footer from "../components/Footer";
import styles from "../styles/anuncios.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <AnunciosPage />
      <Footer />
    </div>
  );
}
