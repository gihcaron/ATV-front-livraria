"use client";

import React from "react";

import AnunciosPage from "../components/anuncios";
import Footer from "../components/Footer";
import LancamentosPage from "../components/lancamentos";
import Header from "../components/Header";
import "../styles/globals.css"; 

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <h2>Descubra mundos extraordinários!</h2>
        <p>Promoção de lançamento com até 30% de desconto</p>
        <button onClick={() => alert("Botão clicado!")}>
          Ver ofertas
        </button>
      </main>

      <AnunciosPage />
      <LancamentosPage />
      <Footer />
    </div>
  );
}
