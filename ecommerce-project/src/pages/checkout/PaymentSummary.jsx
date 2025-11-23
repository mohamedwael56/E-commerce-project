import { useEffect, useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utilities/money";



export function PaymentSummary() {
   
   const [paymentSummary, setPaymentSummary] = useState()
   
   useEffect(() => {
     const loadPaymentSummary = async () => {
       const response = await axios.get("/api/payment-summary");
       setPaymentSummary(response.data);
     };
   
     loadPaymentSummary();
   }, [])
   console.log(paymentSummary);
   
    return(
        
  paymentSummary&&(
        <div key={paymentSummary.id} className="payment-summary">
          <div className="card">
            <div className="card-body ">
              <h3 className="card-title ">payment summary</h3>
              <div className="payment-summary-row">
                <p className="card-subtitle mb-2 ">items ({paymentSummary.totalItems}):</p>
                <div className="payment-money"> {formatMoney(paymentSummary.productCostCents)}</div>
              </div>
              <div className="payment-summary-row">
                <p className="card-subtitle">shipping & handling:</p>
                <div className="payment-money">{formatMoney(paymentSummary.shippingCostCents)}</div>
              </div>

              <div className="payment-summary-row">
                <p className="card-subtitle"> estimated tax:</p>
                <div className="payment-money"> {formatMoney(paymentSummary.taxCents)}</div>
              </div>
              <div className="payment-summary-row">
                <p className="card-subtitle">total before tax:</p>
                <div className="payment-money"> {formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
              </div>
              <div className="payment-summary-row mt-2">
                <p className="card-subtitle mb-2 ">order total:</p>
                <div className="payment-money"> {formatMoney(paymentSummary.totalCostCents)}</div>
              </div>
              <button type="button" className="btn btn-primary mt-3">
                Place your order
              </button>
            </div>
          </div>
        </div>

 )


    )
};