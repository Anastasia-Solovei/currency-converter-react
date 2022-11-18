import axios from 'axios';

async function fetchCurrency() {
  return axios
    .get('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5')
    .then(response => {
      if (response.status === 200 && response.data.length > 0) {
        return response.data;
      }

      return Promise.reject(new Error('Oops nothing was found :('));
    });
}

const currencyApi = {
  fetchCurrency,
};

export default currencyApi;
