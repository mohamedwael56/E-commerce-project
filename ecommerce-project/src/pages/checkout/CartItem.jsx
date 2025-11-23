import { useEffect, useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utilities/money";


export function CartItem(){
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCartItems(response.data);
    };

    loadCart();
  }, []);


    
return(
            <div>
          {cartItems.map((item) => {
            return (
              <div key={item.productId} className="product-card">
                <div className="card-body">
                  <h5 className="product-card-title">
                    Delivery date: November 28
                  </h5>
                  <div className="d-flex flex-row">
                    <img
                      src={item.product.image}
                      className=""
                      style={{ width: "120px", height: "120px" }}
                    ></img>
                    <div className="product-details ">
                      <div className="product-name "> {item.product.name}</div>

                      <div className="product-price ">
                        {formatMoney(item.product.priceCents)}
                      </div>
                      <div className="quantity-actions">
                        <span className="product-quantity">
                          Quantity {item.quantity}
                        </span>
                        <span className="link-primary">update</span>
                        <span className="link-primary">delete</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="delivery-options d-flex flex-column mt-3 mb-3">
                  <div className="delivery-option-title product-card-title">
                    choose a delivery option{" "}
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault1"
                    />
                    <label
                      className="form-check-label mb-2"
                      htmlFor="radioDefault1"
                    >
                      <div>Friday, November 28</div>
                      <div> FREE Shipping</div>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id={item.deliveryOptionId}
                    />
                    <label
                      className="form-check-label mb-2"
                      htmlFor="radioDefault2"
                    >
                      <div> Monday, November 24</div>
                      <div> $5.99 Shipping</div>
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault3"
                    />
                    <label
                      className="form-check-label mb-2"
                      htmlFor="radioDefault3"
                    >
                      <div>Saturday, November 22</div>
                      <div> $9.99 Shipping</div>
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
)
}