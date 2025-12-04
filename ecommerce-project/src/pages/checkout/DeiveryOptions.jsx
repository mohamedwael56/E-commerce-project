import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utilities/money.jsx";

export function DeliveryOptions({ item, loadCart, deliveryOptions }) {


  return (
    <div>
      <div className="delivery-options d-flex flex-column mt-3 mb-3">
        <div className="delivery-option-title product-card-title">
          choose a delivery option{" "}
        </div>

        {deliveryOptions.map((deliveryOption) => {
          let shippingFee = "FREE Shipping";
          if (deliveryOption.priceCents > 0) {
            shippingFee = formatMoney(deliveryOption.priceCents);
          }

          const updateDeliveryOption= async ()=>{
             await axios.put(`/api/cart-items/${item.productId}`,{
              deliveryOptionId:deliveryOption.id
            })
           await loadCart()

          }

          return (
            <div className="form-check" key={deliveryOption.id}>
              <input
                className="form-check-input"
                type="radio"
                onChange={updateDeliveryOption}
                checked={deliveryOption.id===item.deliveryOptionId}
                name={`radioDefault-${item.productId}`}
                id={`radioDefault-${deliveryOption.id}-${item.productId}`}
              />
              <label className="form-check-label mb-2" htmlFor={`radioDefault-${deliveryOption.id}-${item.productId}`}>
                <div>{dayjs(deliveryOption.estimatedDeliveryTimeMs).format('MMMM D')}</div>
                <div> {shippingFee}</div>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
