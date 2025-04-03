"use client";

import styles from '../styles/globals.css';

import React from 'react';
import {useRouter} from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div>

    <div className='styles.text_container'>
      <h1 className='styles.title'> 📚 BooksVerse</h1>
      <p className='styles.content'>Onde histórias ganham vida!</p>
      <p className='styles.content'>Explore um universo de livros e descubra novas aventuras.Aqui, cada página é uma porta para um mundo diferente.</p>
    </div>

   <div>
      <h2 className='styles.subtitle'>Categorias</h2>
        <ul className='styles.link_list'>
          <li>
            <a href="/fiction" className='styles.link'>{Text}</a>
          </li>
          <li>
            <a href="/non-fiction" className='styles.link'>Não Ficção</a>
          </li>
          <li>
            <a href="/adventure" className='styles.link'>Aventura</a>
          </li>
          <li>
            <a href="/mystery" className='styles.link'>Mistério</a>
          </li>
        </ul>
      
   </div>

    </div>
  );
}
