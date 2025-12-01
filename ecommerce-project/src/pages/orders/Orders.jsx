import { useState,useEffect } from "react";
import "./Orders.css";
import axios from "axios";
import { Header } from "../../component/header";
import dayjs from "dayjs";
import { formatMoney } from "../../utilities/money";
import { OrderDetails } from "./orderDetails";
export function Orders() {

  const [orders,setOrders]=useState([])

  useEffect(()=>{

const fetchOrders= async ()=>{
  const response = await axios.get('/api/orders?expand=products')
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
        
              <div className="container mt-2">

                        <div className="card" style={{ width: "50rem", height: "100%" }}>

          <div className="d-flex justify-content-between w-100 p-2">
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
<OrderDetails order={order} />
                </div>
      </div>

      )
    })}

    </>
  );
}
