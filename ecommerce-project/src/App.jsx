import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home.jsx";
import {Routes,Route} from "react-router-dom";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { Orders } from "./pages/orders/Orders.jsx";
import axios from "axios";
import { useEffect } from "react";
import { TrackPage } from "./pages/trackPage/Trackpage.jsx";
function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };

    loadCart();
  }, []);

console.log(cart);


  useState;
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
     <Route path="/checkout" element={ <CheckoutPage  cart={cart}/> } />
      <Route path="/orders" element={ <Orders /> } />
      <Route path="trackPage" element={ <TrackPage /> } />
      
      </Routes>
    </>
  );
}

export default App;
