import React from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";

function App(props) {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <Cart />
    </header>
  );
}

function Footer() {
  return <footer></footer>;
}

export default App;
