import React from 'react';

import sprite from '../../images/svg_sprite.svg';
import styles from './CurrencyItem.module.css';

export default function CurrencyItem({ ccy, buy, sale }) {
  return (
    <li className={styles.CurrencyItem}>
      <svg width="20px" height="20px" className={styles.CurrencyIcon}>
        <use
          href={ccy === 'USD' ? sprite + '#icon-dollar' : sprite + '#icon-eur'}
        ></use>
      </svg>
      <span className={styles.CurrencyElement}>{buy}</span>
      <span className={styles.CurrencyElement}>/</span>
      <span className={styles.CurrencyElement}>{sale}</span>
    </li>
  );
}
