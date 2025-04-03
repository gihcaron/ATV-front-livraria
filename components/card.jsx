"use client";
import React from 'react';

import styles from '../styles/card.module.css';


const  BookCard = ({AltTitle, image, title,  author, stars, price, tags, lancamento}) => {

return (
    <div className={styles.card}>
        <div className={styles.card_image}></div>

    <div className={styles.card_image}>
        <img src={image} alt={AltTitle} />
    </div>

    <div className={styles.card_content}>

{ lancamento && <h3 className={styles.new}>NOVO</h3>}

    <h3 className={styles.title}>{title}</h3>
    <p className={styles.author}> por {author}</p>
    <p className={styles.stars}>{stars}</p>
    
    <div className={styles.card_tags}>
    {tags && tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
    </div>

    <div className={styles.card_buttons}>

    <h3 className={styles.price}> R$ {price}</h3> 
        <button className={styles.button}>❤️</button>
        <button className={styles.button}>🛒</button>
    </div>

    </div>
    </div>
);
}

BookCard.defaultProps = {
    lancamento: false, 
  };  

export default BookCard;



