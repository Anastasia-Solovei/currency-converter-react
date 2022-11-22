import { useState, useEffect } from 'react';
import currencyApi from '../../services/currencyApi';
import { constantCurrencies } from '../../assets/constants';
import CurrencyInput from '../CurrencyInput';

import styles from './CurrencyConverter.module.css';

export default function CurrencyConverter() {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const responseCurrencies = [];
    currencyApi.fetchCurrency().then(response => {
      response.forEach(element => {
        responseCurrencies.push(element);
      });
    });
    setCurrencies(responseCurrencies);
  }, []);

  function handleAmount1Change(amount1) {
    const input = currencies.find(currency => currency.ccy === currency1);
    const output = Number(amount1) * input.buy;

    setAmount2(output.toString());
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    const input = currencies.find(currency => currency.ccy === currency1);
    const output = Number(amount1) * input.buy;

    setAmount2(output.toString());
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    const input = currencies.find(currency => currency.ccy === currency1);
    const output = Number(amount2) / input.sale;

    setAmount1(output.toString());
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    const input = currencies.find(currency => currency.ccy === currency1);
    const output = Number(amount2) / input.sale;

    setAmount1(output.toString());
    setCurrency2(currency2);
  }

  return (
    <form className={styles.CurrencyForm}>
      <CurrencyInput
        handleAmountChange={handleAmount1Change}
        handleCurrencyChange={handleCurrency1Change}
        currencies={constantCurrencies}
        amount={amount1}
        currency={currency1}
      />

      <CurrencyInput
        handleAmountChange={handleAmount2Change}
        handleCurrencyChange={handleCurrency2Change}
        currencies={constantCurrencies}
        amount={amount2}
        currency={currency2}
      />
    </form>
  );
}
