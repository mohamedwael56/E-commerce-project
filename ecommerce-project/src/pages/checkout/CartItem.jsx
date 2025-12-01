import axios from "axios";
import { formatMoney } from "../../utilities/money";
import { DeliveryOptions } from "./DeiveryOptions";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

export function CartItem({ cart, loadCart }) {
  const [deliveryOptions, SetDeliveryOptions] = useState([]);

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

  console.log(cart);
  return (
    <div>
      {cart.map((item) => {
        const selectedProduct = deliveryOptions.find((deliveryOption) => {
          return deliveryOption.id === item.deliveryOptionId;
        });

        return (
          <div key={item.productId} className="product-card">
            <div className="card-body">
              <h5 className="product-card-title">
                Delivery Date:{" "}
                {dayjs(selectedProduct.estimatedDeliveryTimeMs).format(
                  "MMMM D"
                )}
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
          </div>
        );
      })}
    </div>
  );
}
