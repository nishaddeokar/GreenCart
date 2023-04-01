import { BARCODE_API_KEY } from "@env";
import { tempData1 } from "../tempData";

const proxyurl = "https://cors-anywhere.herokuapp.com/"; // Use a proxy to avoid CORS error
const api_key = BARCODE_API_KEY;
const url =
  proxyurl +
  "https://api.barcodelookup.com/v3/products?barcode=077341125112&key=" +
  api_key;

export default async function getBarcodeData(setBarcodeData) {
  //   const res = await fetch(url);
  //   console.log(tempData1);
  setBarcodeData(tempData1);
}
