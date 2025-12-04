import { formatMoney } from "../../utilities/money.jsx";
import axios from "axios";
import { DeliveryOptions } from "./DeiveryOptions.jsx";
import { DeliveryDate } from "./DeliveryDate.jsx";
import { useEffect, useState } from "react";

export function CartItemDetails({ item, loadCart }) {
  const [deliveryOptions, SetDeliveryOptions] = useState([]);

  const [quantity, setQuantity] = useState(item.quantity);
  const [updatedQuantity, setUpdatedQuantity] = useState(false);
  const saveUpdatedQuantity = async () => {
    if (updatedQuantity) {
   await   axios.put(`/api/cart-items/${item.productId}`, {
        quantity
      });
      await loadCart()
      setUpdatedQuantity(false);
    }else{
      setUpdatedQuantity(true)
    }
  };

  function updateQuantity(event) {
    const newProductValue =Number(event.target.value);
    setQuantity(newProductValue);
  }

  useEffect(() => {
    const loadDeliveryOptions = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      SetDeliveryOptions(response.data);
    };

    loadDeliveryOptions();
  }, []);

  const deleteItem = async (productId) => {
    await axios.delete(`/api/cart-items/${productId}`);
    loadCart();
  };

  return (
    <>
      <div className="card-body">
        <DeliveryDate item={item} deliveryOptions={deliveryOptions} />
        <div className="d-flex flex-row">
          <img
            src={item.product.image}
            className="product-image"
          ></img>
          <div className="product-details ">
            <div className="product-name "> {item.product.name}</div>

            <div className="product-price ">
              {formatMoney(item.product.priceCents)}
            </div>
            <div className="quantity-actions">
              <span className="product-quantity">
                Quantity {" "}
                 {updatedQuantity ? (
                  <input
                    value={quantity}
                    onChange={updateQuantity}
                    type="text"
                    className="input-order-value"
                  />
                ) : (
                  <span className="mx-1">{item.quantity}</span>
                )}
              </span>
              <span className="link-primary" onClick={saveUpdatedQuantity}>
                update
              </span>
              <span
                onClick={() => deleteItem(item.productId)}
                className="link-primary"
              >
                delete
              </span>
            </div>
          </div>
        </div>
      </div>
      <DeliveryOptions
        item={item}
        loadCart={loadCart}
        deliveryOptions={deliveryOptions}
      />
    </>
  );
}
