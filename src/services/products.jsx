async function listProducts() {
  try {
    let result = await fetch(`${process.env.REACT_APP_SERVER_HOST}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return result.json();
  } catch (error) {
    throw error;
  }
}

async function getProduct(id = 0) {
  try {
    let result = await fetch(
      `${process.env.REACT_APP_SERVER_HOST}/getProduct?id=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return result.json();
  } catch (error) {
    throw error;
  }
}

export { getProduct, listProducts };
