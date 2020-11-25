import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector((store) => store.cart);
  const { total, produtos } = cart;

  return (
    <section>
      <div>
        <Link to={'/'}>
          <button>{`<`}</button>
        </Link>
        <div>Itens: {produtos.length}</div>
        <div>R$ {total}</div>
        <button onClick={() => exibirItensDoCarrinho()}>
          <IconeCarrinho />
        </button>
      </div>
      <section>
        {produtos.map((produto, index) => (
          <ProdutosCarrinho produto={produto} key={index} />
        ))}
      </section>
    </section>
  );

  // function calculaTotalCarrinho(cartItems) {
  //   return cartItems.length > 0
  //     ? cartItems
  //         .map(calculaTotalPorItem)
  //         .reduce((x, y) => x + y)
  //         .toFixed(2)
  //     : 0;

  //   function calculaTotalPorItem() {
  //     return (x) => x.quantity * x.price;
  //   }
  // }

  // function calculaQuantidadeItensCarrinho() {
  //   return cart.cartItems.length > 0
  //     ? cart.cartItems.map((x) => x.quantity).reduce((x, y) => x + y)
  //     : 0;
  // }

  function exibirItensDoCarrinho() {
    console.log('handleClick Cart.jsx');
  }
}

export default Cart;

function ProdutosCarrinho({ produto }) {
  return (
    <div>
      <div>
        <h4>{produto.name}</h4>
        <section>Quantidade: {produto.quantity}</section>
        <section> R$ {produto.price} (por unidade)</section>
        <section>Código: {produto.id}</section>
        <section>
          <button product={produto}>+</button>
          <button product={produto}>-</button>
        </section>
      </div>
    </div>
  );
}

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
