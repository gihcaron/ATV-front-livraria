"use client";

import React from "react";

import styles from "../styles/anuncios.module.css";

import BookCard from "../components/card";


const  LancamentosPage = () => {

  const AindaEstouAqui = {
    AltTitle: "Ainda Estou Aqui",
    image: "https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/11/22144540/ainda-estou-aqui-1-1024x576.webp",
    title: "Ainda Estou Aqui",
    author: "Rubens Paiva",
    stars: "⭐⭐⭐⭐⭐",
    price: "59.90",
    tags: ["Nacional", "Biografia"],
  };

  const AHoraDaEstrela = {
    AltTitle: "A Hora da Estrela",
    image: "https://photos.enjoei.com.br/livro-a-hora-da-estrela-110340756/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMTg2MjgzNS80YmM5N2VkZmZlNTgyNmU0NjEzYjE1YTZkY2I1MTkzOC5qcGc",
    title: "A Hora da Estrela",
    author: "Clarice Lispector",
    stars: "⭐⭐⭐⭐⭐",
    price: "39.90",
    tags: ["Nacional", "Romance"],
  };

  const AmanhecerNaColheita = {
    AltTitle: "Amanhecer Na Colheita ",
    image: "https://m.media-amazon.com/images/I/71fEYN72-UL._AC_UL480_FMwebp_QL65_.jpg",
    title: "Amanhecer Na Colheita",
    author: " Suzanne Collins",
    stars: "⭐⭐⭐⭐",
    price: "49.90",
    tags: ["Ficção Científica" , "Aventura"],
  };

 

  return (
    <div className={styles.container} style={{ backgroundColor: "#F9F6F9" }}>
      <div className={styles.anuncios_container}>
        <div className={styles.anuncios_content}>
          <h1 className={styles.anuncios_title}>Lançamentos</h1>
          <a className={styles.link} href="#">
            Ver mais
          </a>
        </div>

        <div className={styles.anuncios_section}>
          <BookCard
            AltTitle={AindaEstouAqui.AltTitle}
            image={AindaEstouAqui.image}
            title={AindaEstouAqui.title}
            author={AindaEstouAqui.author}
            stars={AindaEstouAqui.stars}
            price={AindaEstouAqui.price}
            tags={AindaEstouAqui.tags}
          />
          <BookCard
            AltTitle={AHoraDaEstrela.AltTitle}
            image={AHoraDaEstrela.image}
            title={AHoraDaEstrela.title}
            author={AHoraDaEstrela.author}
            stars={AHoraDaEstrela.stars}
            price={AHoraDaEstrela.price}
            tags={AHoraDaEstrela.tags}
          />
          <BookCard
            AltTitle={AmanhecerNaColheita .AltTitle}
            image={AmanhecerNaColheita .image}
            title={AmanhecerNaColheita .title}
            author={AmanhecerNaColheita .author}
            stars={AmanhecerNaColheita .stars}
            price={AmanhecerNaColheita .price}
            tags={AmanhecerNaColheita .tags}
          />

        </div>
      </div>
    </div>
  );
}

export default LancamentosPage;
