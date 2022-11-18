import React from 'react'
import { CartProvider } from 'react-use-cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cart from './Cart';



function Product() {
  return (
    <div>
        <CartProvider>      
     <Home/>
     <Cart/>
     </CartProvider>
    </div>
  );
}

export default Product