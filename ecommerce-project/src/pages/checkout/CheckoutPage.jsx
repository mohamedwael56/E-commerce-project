import "./CheckoutPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CheckoutHeader } from "./CheckoutHeader";
import { CartItem } from "./CartItem";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage({cart,loadCart}) {
  return (
    <>
      <CheckoutHeader cart={cart} />

      <div className="container">
<CartItem cart={cart} loadCart={loadCart} />
<PaymentSummary cart={cart} />
      </div>

    </>
  );
}
