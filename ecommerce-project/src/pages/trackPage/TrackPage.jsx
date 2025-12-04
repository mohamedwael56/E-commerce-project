import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./TrackPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../component/Header.jsx";
import dayjs from "dayjs";

export function TrackPage() {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get(
        `https://backend-file-production.up.railway.app/api/orders/${orderId}?expand=products`
      );
      setOrder(response.data);
    };
    fetchOrderData();
  }, [orderId]);

  if (!order.products) {
    return null;
  }
  console.log(order);

  const orderDetails = order.products.find((product) => {
    return product.productId === productId;
  });
  console.log(orderDetails);

  const totalDeliveryTimeMs =
    orderDetails.estimatedDeliveryTimeMs - order.orderTimeMs;
  const passedTimeMs = dayjs().valueOf() - order.orderTimeMs;
  let progressTime = (passedTimeMs / totalDeliveryTimeMs) * 100;

  if (progressTime > 100) {
    progressTime = 100;
  }

  console.log(progressTime);

  const isPreparing = progressTime < 33;
  const isShipping = progressTime >= 33 && progressTime < 100;
  const isDelivered = progressTime === 100;

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <div className="product-details">
          <a href="orders" className="">
            View all orders
          </a>
          <h1>{`${
            progressTime === 100 ? "Delivered on" : "arriving on"
          } ${dayjs(orderDetails.estimatedDeliveryTimeMs).format(
            "MMMM D"
          )}`}</h1>
          <div>{orderDetails.product.name}</div>
          <div> {`Quantity ${orderDetails.quantity}`}</div>
          <img src={`https://backend-file-production.up.railway.app/${orderDetails.product.image}`} width="150px" />
        </div>
      </div>
      <div className="progress-content">
        <div className={`progress-label ${isPreparing && "active"}`}>
          Preparing
        </div>
        <div className={`progress-label ${isShipping && "active"}`}>
          Shipping
        </div>

        <div className={`progress-label ${isDelivered && "active"}`}>
          Delivered
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-success"
          style={{ width: `${progressTime}%` }}
        ></div>
      </div>
    </>
  );
}
