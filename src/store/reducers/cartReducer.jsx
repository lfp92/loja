const initialState = {
  cartItems: [],
  produtos: [],
  valorTotal: 0.0,
  total: 0.0,
  expanded: false,
};

export default cartReducer;

function cartReducer(state = initialState, action = null) {
  switch (action.type) {
    case 'UPDATE_ITEM_LIST':
      return {
        ...state,
        cartItems: action.payload,
      };

    case 'SET_TOTAL':
      return { ...state, total: action.payload };

    case 'RESET_LIST':
      return { cartItems: [], total: 0 };
      
    default:
      return state;
  }
}
