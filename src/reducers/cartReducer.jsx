const initialState = { cartItems: [], total: 0.0 };

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: action.payload
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: action.payload
      };

    case "CALCULATE_TOTAL":
      return { ...state, total: action.payload };
    default:
      return state;
  }
}
