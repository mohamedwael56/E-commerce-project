import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../component/header";
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



  async function addToCart(productId) {
  await axios.post(`api/cart-items`,{
    productId: productId,
    quantity: 1
  })
  }

  return (
    <>
    <title> Main Page</title>
    <Header />

    <div className="products-details">
    {
      products.map((product)=>{
return(
<div key={product.id} className="">
<div className="card-size" >
  <img src={product.image} className="card-img-top" ></img>
  <div className=" card-body-details">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text ">Added.</p>
   <div>
     <select  aria-label="Default select example" className=" mb-2 mt-2">
  <option value='0'>0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
</div>

    <button 
    onClick={ ()=> addToCart(product.id)}
    className="btn btn-primary"
    >Add To Cart
    </button>
  </div>

</div>
</div>

      )})
    }
    </div>
    </>
  );
}
