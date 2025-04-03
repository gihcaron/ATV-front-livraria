"use client";

import React from "react";

import AnunciosPage from "../components/Anuncios";
import Footer from "../components/Footer";
import LancamentosPage from "../components/Lancamentos";
import Header from "../components/Header";
import CategoriasPage from "../components/Categorias";
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
      <LancamentosPage />

      <AnunciosPage />
      <CategoriasPage />
      <LancamentosPage />

      <section style={styles.container}>
        <h2 style={styles.title}>Nossos Lançamentos</h2>
        <p style={styles.subtitle}>Não sei o que sei oq lá</p>
        <div style={styles.form}>
          <input type="email" placeholder="Email" style={styles.input} />
          <button style={styles.button}>Enviar</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#3c0c64',
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '55px',
    marginRight: '55px',
    height: '15rem',
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    marginBottom: '10px',
    marginTop: '30px',
  },
  subtitle: {
    color: '#fff',
    fontSize: '16px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    flex: '1',
    maxWidth: '300px',
    backgroundColor: '#fff',
    border: '#fff',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#e3abfb',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
