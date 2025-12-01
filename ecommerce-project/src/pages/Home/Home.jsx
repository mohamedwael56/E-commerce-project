import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../component/header";
import { Product } from "./product";
export function Home() {

  const [ products, setProducts ] = useState([]);


  useEffect(() => {
const fetchProducts = async () => {
  const response = await axios.get('api/products')
    setProducts(response.data)

}
fetchProducts();

  },[]);
  console.log(products)




  return (
    <>
    <title> Main Page</title>
    <Header />

    <div className="products-details">
    {
      products.map((product)=>{
return(
      <div key={product.id} className="">

  <Product product={product} key={product.id} />
  </div>
      )})
    }
    </div>
    </>
  );
}
