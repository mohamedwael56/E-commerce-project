import "./CheckoutPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CheckoutHeader } from "./CheckoutHeader";
import { CartItem } from "./CartItem";
import { PaymentSummary } from "./PaymentSummary";

export function CheckoutPage() {
  return (
    <>
      <CheckoutHeader />

      <div className="container">
<CartItem />
<PaymentSummary />
      </div>

    </>
  );
}
