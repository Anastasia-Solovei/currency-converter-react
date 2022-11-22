import PropTypes from 'prop-types';

export default function CurrencyInput({
  handleAmountChange,
  handleCurrencyChange,
  currencies,
  amount,
  currency,
}) {
  return (
    <div className="overlay">
      <input
        type="text"
        value={amount}
        onChange={e => handleAmountChange(e.target.value)}
      ></input>

      <select
        value={currency}
        onChange={e => handleCurrencyChange(e.target.value)}
      >
        {currencies.map(currency => (
          <option value={currency} key={currency}>
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
