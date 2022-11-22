import PropTypes from 'prop-types';

import styles from './CurrencyInput.module.css';

export default function CurrencyInput({
  handleAmountChange,
  handleCurrencyChange,
  currencies,
  amount,
  currency,
}) {
  return (
    <div className={styles.GroupOverlay}>
      <input
        className={styles.Input}
        type="text"
        value={amount}
        onChange={e => handleAmountChange(e.target.value)}
      ></input>

      <select
        className={styles.Select}
        value={currency}
        onChange={e => handleCurrencyChange(e.target.value)}
      >
        {currencies.map(currency => (
          <option className={styles.Option} value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  currencies: PropTypes.array,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  handleAmountChange: PropTypes.func,
  handleCurrencyChange: PropTypes.func,
};
