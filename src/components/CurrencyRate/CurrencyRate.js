import { useEffect, useState } from 'react';
import { currencies } from '../../assets/constants';
import currencyApi from '../../services/currencyApi';

import sprite from '../../images/svg_sprite.svg';
import styles from './CurrencyRate.module.css';

export default function CurrencyRate() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    currencyApi
      .fetchCurrency()
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ul className={styles.CurrencyRate}>
      <li>
        <svg width="20px" height="20px">
          <use href={sprite + '#icon-dollar'}></use>
        </svg>
      </li>
      <li>
        <svg width="20px" height="20px">
          <use href={sprite + '#icon-eur'}></use>
        </svg>
      </li>
    </ul>
  );
}
