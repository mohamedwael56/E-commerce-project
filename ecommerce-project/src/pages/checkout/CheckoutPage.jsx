import "./CheckoutPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CheckoutHeader } from "./CheckoutHeader.jsx";
import { CartItem } from "./CartItem.jsx";
import { PaymentSummary } from "./PaymentSummary.jsx";

export function CheckoutPage({cart,loadCart}) {
  return (
    <>
      <CheckoutHeader cart={cart} />

      <div className="container">
<CartItem cart={cart} loadCart={loadCart} />
<PaymentSummary cart={cart} loadCart={loadCart} />
      </div>

    </>
  );
}
