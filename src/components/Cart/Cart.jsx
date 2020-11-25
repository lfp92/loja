import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  React.useEffect(() => {
    let { cartItems } = cart;
    let total = calculaValorTotal(cartItems);
    //dispatch({ type: 'SET_TOTAL', payload: total });
  }, [props, dispatch, cart]);

  return (
    <div>
      <div>
        <Link to={'/'}>
          <button>{`<`}</button>
        </Link>
        <div>Itens: {calculaQuantidadeItensCarrinho()}</div>
        <div>R$ {cart.total}</div>
        <button onClick={() => handleClick()}>
          <IconeCarrinho />
        </button>
      </div>
      {cart.cartItems.map((item, index) => (
        <ItemCarrinho item={item} key={index} />
      ))}
    </div>
  );

  function ItemCarrinho({ item }) {
    return (
      <div>
        <div>
          <h4>{item.name}</h4>
          <section>Quantidade: {item.quantity}</section>
          <section> R$ {item.price} (por unidade)</section>
          <section>Código: {item.id}</section>
          <section>
            <button product={item}>+</button>
            <button product={item}>-</button>
          </section>
        </div>
      </div>
    );
  }

  function calculaValorTotal(cartItems) {
    return cartItems.length > 0
      ? cartItems
          .map(calculaValorTotalPorItem)
          .reduce((x, y) => x + y)
          .toFixed(2)
      : 0;

    function calculaValorTotalPorItem() {
      return (x) => x.quantity * x.price;
    }
  }

  function calculaQuantidadeItensCarrinho() {
    return cart.cartItems.length > 0
      ? cart.cartItems.map((x) => x.quantity).reduce((x, y) => x + y)
      : 0;
  }

  function handleClick() {
    return dispatch({
      type: props.expanded ? 'COLLAPSE_CART' : 'EXPAND_CART',
    });
  }
}

export default Cart;

function IconeCarrinho() {
  return (
    <img
      alt="Ícone do carrinho de compras"
      width="20px"
      height="20px"
      src="https://image.flaticon.com/icons/png/512/126/126510.png"
    />
  );
}

// const DivQtdeItems = styled.div`
//   margin-left: 10px;
//   margin-right: 10px;
//   width: fit-content;
// `;

// const DivTotal = styled.div`
//   align-items: center;
//   left: 0px;
//   margin-left: 10px;
//   margin-right: 10px;
//   width: fit-content;
// `;

// const Div = styled.div`
//   align-items: flex-start;
//   display: flex;
//   flex-direction: column;
//   font-size: 1.2rem;
//   @media (max-width: 768px) {
//     font-size: 1.05rem;
//   }
//   height: 100%;
//   justify-content: flex-start;
//   margin: 1vh;
// `;

// const DivCarItems = styled.div`
//   background-color: #fefefe;
//   border: 1px solid #222222;
//   color: #222222;
//   padding: 0px 10px 10px 10px;
// `;

// const DivAux = styled.div`
//   display: flex;
//   margin: 10px;
// `;

// const Button = styled.button`
//   border: 1px solid #222222;
//   padding: 5px 10px 5px 10px;
// `;

// const Section = styled.section`
//   font-size: 1rem;
//   margin: 5px;
// `;
