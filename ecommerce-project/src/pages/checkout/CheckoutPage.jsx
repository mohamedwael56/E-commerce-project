import "./CheckoutPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export function CheckoutPage() {
  return (
    <>
      <div className="Header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Ym store
            </a>
            <a className=" navbar-brand" href="#">
              Checkout (2)
            </a>
            <a className="navbar-brand" href="orders">
              orders
            </a>
          </div>
        </nav>
      </div>
      <div className="container">
         <div className="product-card" >
        <div className="card-body">
          <h5 className="product-card-title">Delivery date: November 28</h5>
          <div className="d-flex flex-row">
            <img
              src="../../public/images/intermediate-composite-basketball.jpg"
              className=""
              style={{ width: "120px", height: "120px" }}
            ></img>
                  <div className="product-details ">
                <div className="product-name "> intermediate composite basketball</div>  

                    <div className="product-price ">$7.30</div>
<div className="quantity-actions">
  <span className="product-quantity">quantity: 1</span>
  <span className="link-primary">update</span>
  <span className="link-primary">delete</span>
</div>
                    </div>          
  </div>
            </div>
            <div className="delivery-options d-flex flex-column mt-3 mb-3">
        <div className="delivery-option-title product-card-title">choose a delivery option </div>

        <div className="form-check">
  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1"  />
  <label className="form-check-label mb-2" htmlFor="radioDefault1">
    <div>Friday, November 28</div>
    <div> FREE Shipping</div>

  </label>

</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2"  />
  <label className="form-check-label mb-2" htmlFor="radioDefault2">
   <div> Monday, November 24</div>
    <div> $5.99 Shipping</div>

  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault3"   />
  <label className="form-check-label mb-2" htmlFor="radioDefault3">
    <div>Saturday, November 22</div>
    <div> $9.99 Shipping</div>
  </label>
</div>

</div>
          </div>
      
        <div className="payment-summary">
          <div className="card">
            <div className="card-body ">
              <h3 className="card-title ">payment summary</h3>
              <div className="payment-summary-row">
                <p className="card-subtitle mb-2 ">items(1):</p>
                <div className="payment-money"> $7.30</div>
              </div>
              <div className="payment-summary-row">
                <p className="card-text">shipping & handling:</p>
                <div className="payment-money">$3.10</div>
              </div>

              <div className="payment-summary-row">
                <p className="card-text">total before tax:</p>
                <div className="payment-money"> $15.20</div>
              </div>
              <div className="payment-summary-row">
                <p className="card-text">estimated tax:</p>
                <div className="payment-money">$1.10</div>
              </div>
              <div className="payment-summary-row mt-2">
                <p className="card-subtitle mb-2 ">order total:</p>
                <div className="payment-money"> $20.00</div>
              </div>
              <button type="button" className="btn btn-primary mt-3">
                Place your order
              </button>
            </div>
          </div>
        </div>

     
                </div>
<div className="container">

                   <div className="second-product-card" >
        <div className="second-card-body">
          <h5 className="product-card-title">Delivery date: November 28</h5>
          <div className="d-flex flex-row">
            <img
              src="../../public/images/men-brown-flat-sneakers.jpg"
              className=""
              style={{ width: "120px", height: "120px" }}
            ></img>
                  <div className="product-details ">
                <div className="product-name "> men brown flat sneakers</div>  

                    <div className="product-price ">$7.30</div>
<div className="quantity-actions">
  <span className="product-quantity">quantity: 1</span>
  <span className="link-primary">update</span>
  <span className="link-primary">delete</span>
</div>
                    </div>          
  </div>
            </div>
            <div>
            <div className="second-delivery-options ">
        <div className="delivery-option-title product-card-title">choose a delivery option </div>

        <div className="form-check">
  <input className="form-check-input" type="radio" name="radioDefault2" id="radioDefault4"  />
  <label className="form-check-label mb-2" htmlFor="radioDefault4">
    <div>Friday, November 28</div>
    <div> FREE Shipping</div>

  </label>

</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="radioDefault2" id="radioDefault5"  />
  <label className="form-check-label mb-2" htmlFor="radioDefault5">
   <div> Monday, November 24</div>
    <div> $5.99 Shipping</div>

  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="radioDefault2" id="radioDefault6"   />
  <label className="form-check-label mb-2" htmlFor="radioDefault6">
    <div>Saturday, November 22</div>
    <div> $9.99 Shipping</div>
  </label>
</div>

</div>
</div>
          </div>
</div>
    </>
  );
}
