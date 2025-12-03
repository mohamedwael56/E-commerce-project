import axios from "axios";
import { useState } from "react";


export function Product({ product }) {
  const [quantity, setQuantity] = useState(1);

  const selectedQuantity = (event) => {
    const quantitySelected = Number(event.target.value);
    setQuantity(quantitySelected);
  };

  const [addedProduct,setAddedProduct]=useState(false)

  async function addToCart(productId) {
    await axios.post(`api/cart-items`, {
      productId: productId,
      quantity,
    });
    setAddedProduct(true)
    setTimeout(()=>{
      setAddedProduct(false)
    },2000)
  }

  return (
      <div className="card-size">
        <img src={product.image} className="card-img-top"></img>
        <div className=" card-body-details">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text " style={{opacity:addedProduct?1:0}}>Added</div>
          <div>
            <select
              value={quantity}
              onChange={selectedQuantity}
              aria-label="Default select example"
              className=" mb-2 mt-2"
            >
              <option value="0">0</option>
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
            onClick={() => addToCart(product.id)}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
  );
}
