import data from './mock';

const { listProducts, getProduct } = require('./ProductService');

describe('Serviço itens', () => {
  test('Deve retornar lista de itens', async () => {
    expect(listProducts()).resolves.toEqual(data);
  });

  test('Deve retornar o item correto', () => {
    expect(getProduct(55)).resolves.toEqual(data[4]);
  });

  test('Deve retornar erro quando não houver ID', () => {
    expect(getProduct()).rejects.toThrow('Item não encontrado');
  });

  test('Deve retornar erro ao pedir ID inexistente', () => {
    expect(getProduct(100)).rejects.toThrow('Item não encontrado');
  });
});
