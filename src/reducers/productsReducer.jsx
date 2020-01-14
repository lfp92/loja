const initialState = { list: [], data: [], searchString: "" };

export default function(state = initialState, action) {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      return { ...state, searchString: action.payload };
    case "LIST_PRODUCTS":
      return { ...state, list: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
