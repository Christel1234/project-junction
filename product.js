import { API_URL } from "./shared.js";
import { doFetch } from "./utils.js";

async function product() {
  const params = new URLSearchParams(window.location.search);
  const Id = params.get("id");
  //const Id = 1;
  console.log(Id);
  const url = API_URL + `product/${Id}`;
  const currentProduct = await doFetch(url);
  console.log(currentProduct);
}
product();
