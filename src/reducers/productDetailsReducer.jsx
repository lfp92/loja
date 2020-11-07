const initialState = {
  product: { id: '0', name: '', price: '0.0', description: '' },
  error: false,
};

export default productDetailsReducer;

function productDetailsReducer(state = initialState, action = null) {
  switch (action.type) {
    case 'SET_DETAIL':
      return { ...state, product: action.payload };
    case 'SET_ERROR_DETAIL':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
