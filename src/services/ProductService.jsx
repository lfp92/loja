import data from './mock';

async function listProducts() {
  return data;
}

async function getProduct(id = 0) {
  const result = data.find((product) => product.id === id.toString());
  if (result) {
    return result;
  } else {
    throw new Error('Item não encontrado');
  }
}

export { getProduct, listProducts };
