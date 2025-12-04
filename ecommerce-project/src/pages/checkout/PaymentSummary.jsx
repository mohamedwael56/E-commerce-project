import { useEffect, useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utilities/money.jsx";
import {Navigate, useNavigate} from 'react-router-dom'


export function PaymentSummary({cart, loadCart}) {
   
   const [paymentSummary, setPaymentSummary] = useState()
   
   useEffect(() => {
     const loadPaymentSummary = async () => {
       const response = await axios.get("https://backend-file-production.up.railway.app/api/payment-summary");
       setPaymentSummary(response.data);

     };
     loadPaymentSummary();
   }, [cart])
  const navigate = useNavigate();

   async function placeOrders (){
    await axios.post('https://backend-file-production.up.railway.app/api/orders')
    await loadCart()
    navigate('/orders')
   }
   console.log(paymentSummary);
   
    return(
        
  paymentSummary&&(
        <div key={paymentSummary.id} className="payment-summary">
          <div className="card">
            <div className="payment-card-body ">
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
              <button 
              type="button" 
              className="btn btn-primary  card-button"
              onClick={placeOrders}
              >
                Place your order
              </button>
            </div>
          </div>
        </div>

 )


    )
};