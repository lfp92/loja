const initialState = {
  list: [
    {
      id: '2',
      name:
        'Processador AMD Ryzen 5 1600, Cache 19MB, 3.2GHz (3.6GHz Max Turbo), AM4 - YD1600BBAFBOX',
      price: '764.59',
      description:
        'Com esse processador inovador e incrível você desfruta ao máximo o verdadeiro potencial do seu computador e desfruta da mais pura velocidade. Maximize o seu desempenho seja trabalhando, jogando, navegando ou assistindo o seu filme preferido, com esse processador você pode tudo!',
    },
  ],
  data: [],
  searchString: '',
};

export default productsReducer;

function productsReducer(state = initialState, action = null) {
  switch (action.type) {
    case 'FILTER_PRODUCTS':
      return { ...state, searchString: action.payload };
    case 'LIST_PRODUCTS':
      return { ...state, list: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
