const initialState = { cartItems: [], total: 0.0 };

export default function (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_ITEM_LIST":
      return {
        ...state,
        cartItems: action.payload
      };

    case "SET_TOTAL":
      return { ...state, total: action.payload };

    case "RESET_LIST":
      return { cartItems: [], total: 0 };

    default:
      return state;
  }
}
