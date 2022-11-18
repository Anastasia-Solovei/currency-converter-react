import { useEffect, useState } from 'react';
import { currencies } from '../../assets/constants';
import currencyApi from '../../services/currencyApi';
import CurrencyItem from '../CurrencyItem';

import styles from './CurrencyRate.module.css';

export default function CurrencyRate() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const fetchCurrency = async () => {
      const data = await currencyApi.fetchCurrency();
      const filtredCurrencies = [];

      currencies.forEach(currency => {
        data.forEach(element => {
          if (element.ccy === currency) {
            filtredCurrencies.push({
              ccy: element.ccy,
              buy: Number(element.buy).toFixed(2),
              sale: Number(element.sale).toFixed(2),
            });
          }
        });
      });

      setCurrency(filtredCurrencies);
      localStorage.setItem('currency', JSON.stringify(filtredCurrencies));
      localStorage.setItem('currencyTime', Date.now());
    };

    let currencyLS = JSON.parse(localStorage.getItem('currency'));
    let currencyTime = JSON.parse(localStorage.getItem('currencyTime'));
    if (!currencyLS) {
      fetchCurrency();
    }
    if (Date.now() - currencyTime > 3600000) {
      fetchCurrency();
    } else {
      setCurrency(currencyLS);
    }
  }, []);

  return (
    <ul className={styles.CurrencyList}>
      {currency.map(({ ccy, buy, sale }) => {
        return <CurrencyItem key={ccy} buy={buy} sale={sale} />;
      })}
    </ul>
  );
}
