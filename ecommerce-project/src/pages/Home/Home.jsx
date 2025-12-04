import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../component/Header.jsx";
import { Product } from "./Product.jsx";
import { useSearchParams } from "react-router";
export function Home({loadCart}) {

  const [ products, setProducts ] = useState([]);



  const [searchParams]=useSearchParams()
  const searchedProduct = searchParams.get('search')

  useEffect(() => {
const fetchProducts = async () => {
  const response = await axios.get(searchedProduct? `https://backend-file-production.up.railway.app/api/products/?search=${searchedProduct}`:`https://backend-file-production.up.railway.app/api/products`)
    setProducts(response.data)

}
fetchProducts();

  },[searchedProduct]);
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

  <Product product={product} key={product.id} loadCart={loadCart} />
  </div>
      )})
    }
    </div>
    </>
  );
}
