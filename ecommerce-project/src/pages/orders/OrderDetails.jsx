import dayjs from "dayjs"
export function OrderDetails({order}){



return(
<>
    {order.products.map((orderDetails)=>{
        console.log(orderDetails)
        console.log(order.products.length)
        console.log(order.products)
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
                <button type="button" className="btn btn-success d-flex mb-2">
                  {" "}
                  Add to cart
                </button>
              </div>
              <a href="trackPage">
                <button type="button" className="btn btn-light d-flex mb-3">
                  Track Package
                </button>
              </a>
            </div>

         
        </div>
)
    })}
</>
    )
}