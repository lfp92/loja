const initialState = {
  product: { id: "0", name: "", price: "0.0", description: "" },
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_DETAIL":
      return { ...state, product: action.payload };
    case "SET_ERROR_DETAIL":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
