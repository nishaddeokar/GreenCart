import { tempData3 } from '../tempData';
import { DITCHCARBON_API_KEY } from '@env';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    authorization: `Bearer ${DITCHCARBON_API_KEY}`,
  },
};

export default async function getDitchCarbonData(
  { name, manufacturer, category_name },
  useApi
) {
  let data = {};

  if (useApi) {
    const res = await fetch(
      `https://api.ditchcarbon.com/v1.0/product?name=${encodeURIComponent(
        name
      )}&manufacturer=${encodeURIComponent(
        manufacturer
      )}&category_name=${encodeURIComponent(category_name)}&country=gb`,
      options
    );
    data = await res.json();
  } else {
    data = tempData3;
  }

  return data;
}
