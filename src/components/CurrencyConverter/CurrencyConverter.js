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
    setAmount1(amount1);
    if (currency1 === currency2) {
      setAmount2(amount1);
      return;
    }

    let resultAmount2;
    const ccy1 = currencies.find(currency => currency.ccy === currency1);
    const ccy2 = currencies.find(currency => currency.ccy === currency2);

    if (ccy1 && currency2 === ccy1.base_ccy) {
      resultAmount2 = (Number(amount1) * ccy1.buy).toFixed(2).toString();
      setAmount2(resultAmount2);
      return;
    }

    if (ccy2 && currency1 === ccy2.base_ccy) {
      resultAmount2 = (Number(amount1) / ccy2.sale).toFixed(2).toString();
      setAmount2(resultAmount2);
      return;
    }

    resultAmount2 = ((Number(amount1) * ccy1.buy) / ccy2.sale)
      .toFixed(2)
      .toString();
    setAmount2(resultAmount2);
  }

  function handleCurrency1Change(currency1) {
    setCurrency1(currency1);
    if (currency1 === currency2) {
      setAmount2(amount1);
      return;
    }

    let resultAmount2;
    const ccy1 = currencies.find(currency => currency.ccy === currency1);
    const ccy2 = currencies.find(currency => currency.ccy === currency2);

    if (ccy1 && currency2 === ccy1.base_ccy) {
      resultAmount2 = (Number(amount1) * ccy1.buy).toFixed(2).toString();
      setAmount2(resultAmount2);
      return;
    }

    if (ccy2 && currency1 === ccy2.base_ccy) {
      resultAmount2 = (Number(amount1) / ccy2.sale).toFixed(2).toString();
      setAmount2(resultAmount2);
      return;
    }

    resultAmount2 = ((Number(amount1) * ccy2.buy) / ccy1.sale)
      .toFixed(2)
      .toString();
    setAmount2(resultAmount2);
  }

  function handleAmount2Change(amount2) {
    setAmount2(amount2);
    if (currency2 === currency1) {
      setAmount1(amount2);
      return;
    }

    let resultAmount1;
    const ccy1 = currencies.find(currency => currency.ccy === currency1);
    const ccy2 = currencies.find(currency => currency.ccy === currency2);

    if (ccy1 && currency2 === ccy1.base_ccy) {
      resultAmount1 = (Number(amount2) / ccy1.buy).toFixed(2).toString();
      setAmount1(resultAmount1);
      return;
    }

    if (ccy2 && currency1 === ccy2.base_ccy) {
      resultAmount1 = (Number(amount2) * ccy2.sale).toFixed(2).toString();
      setAmount1(resultAmount1);
      return;
    }

    resultAmount1 = ((Number(amount2) * ccy2.sale) / ccy1.buy)
      .toFixed(2)
      .toString();
    setAmount1(resultAmount1);
  }

  function handleCurrency2Change(currency2) {
    setCurrency2(currency2);
    if (currency2 === currency1) {
      setAmount2(amount1);
      return;
    }

    let resultAmount2;
    const ccy1 = currencies.find(currency => currency.ccy === currency1);
    const ccy2 = currencies.find(currency => currency.ccy === currency2);

    if (ccy1 && currency2 === ccy1.base_ccy) {
      resultAmount2 = (Number(amount1) * ccy1.buy).toFixed(2).toString();
      setAmount2(resultAmount2);
      return;
    }

    if (ccy2 && currency1 === ccy2.base_ccy) {
      resultAmount2 = (Number(amount1) / ccy2.sale).toFixed(2).toString();
      setAmount2(resultAmount2);
      return;
    }

    resultAmount2 = ((Number(amount1) * ccy1.buy) / ccy2.sale)
      .toFixed(2)
      .toString();
    setAmount2(resultAmount2);
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
