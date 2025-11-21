import './CheckoutPage.css';
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
              Checkout(0)
            </a>
            <a className="navbar-brand" href="#">
              orders
            </a>
          </div>
        </nav>
      </div>
<div className='container'>
      <div className="payment-summary">
        <div className="card" >
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
    </>
  );
}
