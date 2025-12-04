import { useState,useEffect } from "react";
import "./Orders.css";
import axios from "axios";
import { Header } from "../../component/Header.jsx";
import dayjs from "dayjs";
import { formatMoney } from "../../utilities/money.jsx";
import { OrderDetails } from "./OrderDetails.jsx";
export function Orders({cart, loadCart}) {

  const [orders,setOrders]=useState([])

  useEffect(()=>{

const fetchOrders= async ()=>{
  const response = await axios.get('https://backend-file-production.up.railway.app/api/orders?expand=products')
  setOrders(response.data)
}
fetchOrders()

  },[])
  console.log(orders)


  return (
    <>
    <Header />


    {orders.map((order)=>{
      return(
        
              <div className="container">

                        <div className="orders-card" >

          <div className="header-details">
            <div>
              <div>Order placed:</div>
              <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
            </div>

            <div>
              <div>Total:</div>
              <div>{formatMoney(order.totalCostCents)}</div>
            </div>

            <div>
              <div>Order ID:</div>
              <div>{order.id}</div>
            </div>
          </div>
          <hr />
<OrderDetails order={order} cart={cart} loadCart={loadCart} />
                </div>
      </div>

      )
    })}

    </>
  );
}
