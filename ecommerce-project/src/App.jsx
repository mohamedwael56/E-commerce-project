import { useState } from "react";
import "./App.css";
import { Home } from "./Home/Home.jsx";
import {Routes,Route} from "react-router-dom";
import { CheckoutPage } from "./checkout/CheckoutPage.jsx";
import { Orders } from "./orders/Orders.jsx";
import { TrackPage } from "./track page/Trackpage.jsx";
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
