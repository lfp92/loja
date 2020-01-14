import React from "react";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Products />
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
