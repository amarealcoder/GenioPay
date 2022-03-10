import React from 'react';
import styles from './AsideCard.module.css';
import megaphone from '../../../images/megaphone.png';

const AsideCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <img src={megaphone} alt='megaphone' />
          <div className={styles.cardInfoElements}>
            <p className={styles.p1}>Refer and Earn</p>
            <p className={styles.p2}>Use the below link to invite friends</p>
          </div>
        </div>
      </div>
        <button>Invite Friends</button>
    </div>
  );
};

export default AsideCard;
