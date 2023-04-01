import { BARCODE_API_KEY } from '@env';
import { tempData2 } from '../tempData';

const proxyurl = 'https://cors-anywhere.herokuapp.com/'; // Use a proxy to avoid CORS error
const api_key = BARCODE_API_KEY;

export default async function getBarcodeData(barcodeNum, useApi) {
  const url =
    proxyurl +
    `https://api.barcodelookup.com/v3/products?barcode=${barcodeNum}&key=` +
    api_key;

  let data = {};

  if (useApi) {
    const res = await fetch(url);
    data = res.data;
  } else {
    data = tempData2;
  }

  return data;
}
