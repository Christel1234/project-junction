async function doFetch(url) {
  try {
    const data = await fetch(url);
    const toreturn = await data.json();
    return toreturn;
  } catch (error) {
    console.log("Error", error);
  }
}
export { doFetch };
