import React from 'react';
import styles from './Find.module.css';

const Card = ({ image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="" />
        </div>
    );
}

export default Card;
