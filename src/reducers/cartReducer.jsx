const initialState = { cartItems: [], total: 0.0 };
const calculateTotal = item => item.quantity * item.price;
const removeItemFromList = payload => item => item.id !== payload.id;

export default function cartReducer(state = initialState, action) {
  switch (action) {
    case "ADD_ITEM":
      let cartItems = state.cartItems.push(action.payload);
      return {
        ...state,
        cartItems,
        total: cartItems.map(calculateTotal)
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: cartItems.filter(removeItemFromList(action.payload))
      };

    default:
      return state;
  }
}
