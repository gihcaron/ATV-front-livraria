"use client";

import React from "react";

import styles from "../styles/anuncios.module.css";

import BookCard from "./Card";


const  AnunciosPage = () => {

  const cosoa = {
    AltTitle: "Coisas Óbivias sobre o Amor",
    image: "https://livrariascuritiba.vteximg.com.br/arquivos/ids/2197663-1000-1000/LV523387.jpg?v=638679101769300000",
    title: "Coisas Óbivias sobre o Amor",
    author: "Elaine Baeta",
    stars: "⭐⭐⭐⭐⭐",
    price: "49.90",
    tags: ["Young Adult", "Romance"],
  };

  const MackesyCharlie = {
    AltTitle: "O Menino, a Toupeira, a Raposa e o Cavalo",
    image: "https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1518424-800-800/1023093_3.jpg?v=638484670996170000",
    title: "O Menino, a Toupeira, a Raposa e o Cavalo",
    author: "MACKESY, CHARLIE",
    stars: "⭐⭐⭐⭐",
    price: "79.90",
    tags: ["Infantil", "Fabula"],
  };

  const blackOut= {
    AltTitle: "Blackout",
    image: "https://a-static.mlcdn.com.br/1500x1500/livro-blackout/magazineluiza/231311400/d96377a13ce0fe562c66f9a0a4b29fa2.jpg",
    title: "Blackout",
    author: "Ashley Woodfolk",
    stars: "⭐⭐⭐⭐",
    price: "49.90",
    tags: ["Young Adult", "Romance"],
  };

  const HarryPotter= {
    AltTitle: "Coleção Especial 3 Livros - Harry Potter",
    image: "https://livrariascuritiba.vteximg.com.br/arquivos/ids/2004490-1000-1000/LV417870_LV417871_LV417872.jpg?v=637740666510130000",
    title: "Coleção Especial 3 Livros - Harry Potter",
    author: "J. K. Rowling",
    stars: "⭐⭐⭐⭐",
    price: "239.90",
    tags: ["Fantasia", "Juvenil"],

  };


  return (
    <div className={styles.container} style={{ backgroundColor: "#F9F6F9" }}>
      <div className={styles.anuncios_container}>
        <div className={styles.anuncio_content}>
          <h1 className={styles.anuncios_title}>Destaques da Semana</h1>
          <a className={styles.link} href="#">
            Ver mais
          </a>
        </div>

        <div className={styles.anuncios_section}>
          <BookCard
            AltTitle={cosoa.AltTitle}
            image={cosoa.image}
            title={cosoa.title}
            author={cosoa.author}
            stars={cosoa.stars}
            price={cosoa.price}
            tags={cosoa.tags}
          />
          <BookCard
            AltTitle={MackesyCharlie.AltTitle}
            image={MackesyCharlie.image}
            title={MackesyCharlie.title}
            author={MackesyCharlie.author}
            stars={MackesyCharlie.stars}
            price={MackesyCharlie.price}
            tags={MackesyCharlie.tags}
          />
          <BookCard
            AltTitle={blackOut.AltTitle}
            image={blackOut.image}
            title={blackOut.title}
            author={blackOut.author}
            stars={blackOut.stars}
            price={blackOut.price}
            tags={blackOut.tags}
          />
          <BookCard
            AltTitle={HarryPotter.AltTitle}
            image={HarryPotter.image}
            title={HarryPotter.title}
            author={HarryPotter.author}
            stars={HarryPotter.stars}
            price={HarryPotter.price}
            tags={HarryPotter.tags}
          />
        </div>
      </div>
    </div>
  );
}

export default AnunciosPage;
