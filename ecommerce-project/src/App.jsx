import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home.jsx";
import {Routes,Route} from "react-router-dom";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { Orders } from "./pages/orders/Orders.jsx";
import { TrackPage } from "./pages/trackPage/Trackpage.jsx";
function App() {
  useState;
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
     <Route path="/checkout" element={ <CheckoutPage /> } />
      <Route path="/orders" element={ <Orders /> } />
      <Route path="trackPage" element={ <TrackPage /> } />
      
      </Routes>
    </>
  );
}

export default App;
