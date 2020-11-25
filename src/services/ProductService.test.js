import data from './mock';

const { listItems, getItem } = require('./ProductService');

describe('Serviço itens', () => {
  test('Deve retornar lista de itens', async () => {
    expect(listItems()).resolves.toEqual(data);
  });

  test('Deve retornar o item correto', () => {
    expect(getItem(55)).resolves.toEqual(data[4]);
  });

  test('Deve retornar erro quando não houver ID', () => {
    expect(getItem()).rejects.toThrow('Item não encontrado');
  });

  test('Deve retornar erro ao pedir ID inexistente', () => {
    expect(getItem(100)).rejects.toThrow('Item não encontrado');
  });
});
