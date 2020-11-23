import React from "react";
import Cart from "../Cart/Cart";
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

const Head = styled.header`
      align-items: flex-start;
      background-color: #fe7c02;
      color: #ffffff;
      font-size: 1.5rem;
      height: 100vh;
      overflow: auto;
      margin: 0px;
      position: fixed;
      width: 100%;
      z-index: 1;
`;

const Main = styled.main`
  background-color: #222222;
  color: #ffffff;
  padding-top: 2vw;
  position: relative;
  text-decoration: none;
  top: 10vh;
`

const Footer = styled.footer`

  ` 