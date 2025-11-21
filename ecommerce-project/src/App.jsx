import { useState } from "react";
import "./App.css";
import { Home } from "./Home/Home.jsx";
import {Routes,Route} from "react-router-dom";
import { CheckoutPage } from "./checkout/CheckoutPage.jsx";
function App() {
  useState;
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
     <Route path="/checkout" element={ <CheckoutPage /> } />
      </Routes>
    </>
  );
}

export default App;
