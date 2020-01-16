import React from "react";
import Cart from "./Cart/Cart";
import styled from 'styled-components';
import { connect } from "react-redux";

function App(props) {
  return (
    <div>
      <Head>
        <Cart />
      </Head>
      <Main>
        {props.children}
      </Main>
      <Footer />
    </div>
  );
}

export default App;

const Head = connect(store => ({ expanded: store.cart.expanded }))(
  styled.header`
      align-items: ${(props => props.expanded ? 'flex-start' : 'center')};
      background-color: #fe7c02;
      color: #ffffff;
      font-size: 1.5rem;
      height: ${(props => props.expanded ? '100vh' : '10vh')};
      overflow: ${(props => props.expanded ? 'false' : 'true')};
      margin: 0px;
      position: fixed;
      width: 100%;
      z-index: 1;
`)

const Main = styled.main`
  padding-top: 2vw;
  top: 10vh;
  position: relative;
  color: #ffffff;
  background-color: #222222;
  text-decoration: none;
`

const Footer = styled.footer`

  ` 