import axios from "axios"
import dayjs from "dayjs"
import { Link } from "react-router-dom"

export function OrderDetails({order}){

console.log(order)
return(
<>
    {order.products.map((orderDetails)=>{
        console.log(orderDetails)
       
        const addToCart=async ()=>{
axios.post(`/api/cart-items/`,{
    productId:orderDetails.product.id,
    quantity:1
})
}

return(
            <div className="container d-flex justify-content-start ">
            <img
              src={orderDetails.product.image}
              alt=""
              className="object-fit-cover"
              style={{ width: "130px", height: "130px" }}
            />
            <div className="">
              <div className="d-flex mb-2 order-name">
                {orderDetails.product.name}
              </div>
              <div className="d-flex ">Arriving on: {dayjs(orderDetails.estimatedDeliveryTimeMs).format('MMMM D')}</div>
              <div className="d-flex mb-2">Quantity: {orderDetails.quantity}</div>
              <div>
                <button 
                type="button"
                className="btn btn-success d-flex mb-2"
                onClick={addToCart}
                >
                  {" "}
                  Add to cart
                </button>
              </div>
              <Link to={`/trackPage/${order.id}/${orderDetails.productId}`}>
                <button type="button" className="btn btn-light d-flex mb-3">
                  Track Package
                </button>
              </Link>
            </div>

         
        </div>
)
    })}
</>
    )
}