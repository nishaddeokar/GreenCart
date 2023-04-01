import { tempData3 } from '../tempData';
import { DITCHCARBON_API_KEY } from '@env';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${DITCHCARBON_API_KEY}`,
  },
};

export default async function getDitchCarbonData(setDitchCarbonData, useApi) {
  let data = {};

  if (useApi) {
    const res = await fetch(
      'https://api.ditchcarbon.com/v1.0/product?name=Coca-Cola%2520Zero%2520-%2520Can%252033cl&manufacturer=Coca-Cola&price_cents=1399&price_currency=GBP',
      options
    );
    data = await res.json();
  } else {
    data = tempData3;
  }

  setDitchCarbonData(data);
}
