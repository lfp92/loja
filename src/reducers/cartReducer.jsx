const initialState = {
  cartItems: [
    // {
    //   id: "1",
    //   name:
    //     "Memória HyperX Fury, 8GB, 2400MHz, DDR4, CL15, Preto - HX424C15FB3/8",
    //   price: "291.65",
    //   description:
    //     "A Memória RAM HyperX FURY DDR4 apresenta um visual incrível com um dissipador de calor atualizado. Com um potencial incrível para você performar em alto nível, ela conta com overclock automático Plug & Play para módulos de velocidades até 2666MHz, sendo compatível com as mais recentes CPUs Intel e AMD. A Memória RAM HyperX FURY DDR4 possui garantia vitalícia, sendo uma atualização excelente e com preço acessível para fazer com que você tenha um desempenho incrível no seu jogo preferido. Sinta a verdadeira fúria das Memórias HyperX e tenha uma experiência jamais vivenciada antes."
    // }
  ], total: 0.0, expanded: false
};

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

    case "EXPAND_CART":
      return { ...state, expanded: true };

    case "COLLAPSE_CART":
      return { ...state, expanded: false }
    default:
      return state;
  }
}
