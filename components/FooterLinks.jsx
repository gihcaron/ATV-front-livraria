"use client";

import styles from '../styles/footer.module.css';

import React from 'react';


const FooterLinks = ({linkTitle, linkList}) => {
  return (
    <div>
        <h3 className={styles.link_title}>{linkTitle}</h3>
        <ul className={styles.list}>
            {linkList.map((link,index) => (
                <li key={index}>
                    <a href={link.url} className={styles.link}>{link.text}</a>
                </li>
            ))} 

        </ul>
    </div>
  );
};

export default FooterLinks;
