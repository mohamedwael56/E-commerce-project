import './cartItem.css'
import { CartItemDetails } from "./cartItemDetails.jsx";

export function CartItem({ cart, loadCart }) {


  console.log(cart);
  return (
    <div>
      {cart.map((item) => {
        return (
          <div key={item.productId} className="product-card">
         <CartItemDetails item={item} loadCart={loadCart} />
          </div>
        );
      })}
    </div>
  );
}
