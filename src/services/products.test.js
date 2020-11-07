import data from './mock';

const { listProducts, getProduct } = require('./products');

describe('Serviço produtos', () => {
  test('Deve retornar lista de produtos', async () => {
    expect(listProducts()).resolves.toEqual(data);
  });

  test('Deve retornar o produto correto', () => {
    expect(getProduct(55)).resolves.toEqual(data[4]);
  });

  test('Deve retornar erro quando não houver ID', () => {
    expect(getProduct()).rejects.toThrow('Produto não encontrado');
  });

  test('Deve retornar erro ao pedir ID inexistente', () => {
    expect(getProduct(100)).rejects.toThrow('Produto não encontrado');
  });
});
