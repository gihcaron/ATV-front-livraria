"use client";
import React from 'react';

import styles from '../styles/footer.module.css';

import FooterLinks from '../components/FooterLinks';


export default function Footer() {

const links = [
  {url : '#', text: 'Home'},
  {url : '#', text: 'Catálogo'},
  {url : '#', text: 'Ofertas'},
  {url : '#', text: 'Sobre Nós'},
  {url : '#', text: 'contato'},
];

const categorias = [
  {url : '#', text: 'Ficção Científica'},
  {url : '#', text: 'Romance'},
  {url : '#', text: 'Técnologia'},
  {url : '#', text: 'Fantasia'},
  {url : '#', text: 'História'},
];
const Redes = [
  {url : '#', text: '📸 Instagram'},
  {url : '#', text: '🎵 TikTok'},
  {url : '#', text: '🦜 Twitter'},
  {url : '#', text: '📼 YouTube'},
];

  return (
    <div className={styles.footer}>

    <div className={styles.footer_container}>

    <div className={styles.text_container}>
      <div className={styles.brand}>
      <h1 className={styles.logo}> 📚 Books<span className={styles.highlight}>Verse</span></h1>
      </div>
      <p className={styles.content}>Onde histórias ganham vida!</p>
      <p className={styles.content}>Explore um universo de livros e descubra novas aventuras.Aqui, cada página é uma porta para um mundo diferente.</p>
    </div>

    
    <FooterLinks linkTitle="Links Rápidos" linkList={links}/>

    <FooterLinks linkTitle="Categorias" linkList={categorias}/>

    <FooterLinks linkTitle="Redes Sociais" linkList={Redes}/>

    </div>

    <div className={styles.footer_bottom}>
      <p> © {new Date().getFullYear()}BooksVerse. Todos os direitos reservados.</p>

      <div className={styles.Bottom_Link}>
        <a href="#">Termos de Uso</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Política de Cookies</a>
      </div>
    </div>

    </div>
  );
}

