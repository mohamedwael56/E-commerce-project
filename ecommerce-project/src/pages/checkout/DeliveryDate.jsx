import dayjs from "dayjs";

export function DeliveryDate({ item, deliveryOptions }) {
  const selectedProduct = deliveryOptions.find((deliveryOption) => {
    return deliveryOption.id === item.deliveryOptionId;
  });

  console.log(selectedProduct);
  return (
    <h5 className="product-card-title">
      Delivery Date:{" "}
      {selectedProduct&&dayjs(selectedProduct.estimatedDeliveryTimeMs).format("MMMM D")}
    </h5>
  );
}
