const initialState = {
  products: [],
  searchString: '',
};

export default productsReducer;

function productsReducer(state = initialState, action = null) {
  switch (action.type) {
    case 'FILTER_PRODUCTS':
      return { ...state, searchString: action.payload };
    case 'LIST_PRODUCTS':
      return { ...state, products: action.products };
    default:
      return state;
  }
}
