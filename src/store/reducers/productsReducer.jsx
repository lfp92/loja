const initialState = {
  list: [],
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
