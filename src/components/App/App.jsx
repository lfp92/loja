import React from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

function App(props) {
  return (
    <>
      <header>
        <Cart />
      </header>
      <main>
        <Products />
      </main>
      <fotter />
    </>
  );
}

export default App;
