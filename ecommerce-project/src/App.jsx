import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home.jsx";
import {Routes,Route} from "react-router-dom";
import { CheckoutPage } from "./Pages/checkout/CheckoutPage.jsx";
import { Orders } from "./Pages/orders/Orders.jsx";
import axios from "axios";
import { useEffect } from "react";
import { TrackPage } from "./Pages/trackPage/TrackPage.jsx";
function App() {
  const [cart, setCart] = useState([]);


          const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
      
    };

  useEffect(() => {
 loadCart()
  }, [])



  return (
    <>
    <Routes>
      <Route path="/" element={ <Home cart={cart} loadCart={loadCart} /> } />
     <Route path="/checkout" element={ <CheckoutPage  cart={cart}  loadCart={loadCart} /> } />
      <Route path="/orders" element={ <Orders cart={cart} /> } />
      <Route path="/trackPage/:orderId/:productId" element={ <TrackPage /> } />
      
      </Routes>
    </>
  );
}

export default App;
