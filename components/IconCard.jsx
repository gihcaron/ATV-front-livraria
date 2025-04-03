"use client";
import React from 'react';

import styles from '../styles/IconCard.module.css';


const  IconCard = ({icon, title }) => {

return (

    <div className={styles.card}>


    <div className={styles.card_content}>

    <h3 className={styles.icon}>{icon}</h3>
    <p className={styles.title}>  {title}</p>

    </div>
    </div>
);
}

export default IconCard;



