import React from "react";
import Cart from "./Cart/Cart";
import styled from 'styled-components';

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
@media (max-width: 728px) {
} 
  align-items: center;
  background-color: #ff6500;
  color: #ffffff;
  font-size: 1.5rem;
  height: 10vh;
  margin: 0px;
  position: fixed;
  width: 100%;
  z-index: 1;
`
const Main = styled.main`
  padding-top: 2vw;
  top: 10vh;
  position: relative;
  color: #ffffff;
  background-color: gray;
  text-decoration: none;
`

const Footer = styled.footer`

` 