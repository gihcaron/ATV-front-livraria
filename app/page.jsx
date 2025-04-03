"use client";

import React from "react";
import styles from "../styles/anuncios.module.css";

import AnunciosPage from "../components/anuncios";
import Footer from "../components/Footer";
import Header from '../components/Header';


export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <AnunciosPage />
      <Footer />
    </div>
  );
}
