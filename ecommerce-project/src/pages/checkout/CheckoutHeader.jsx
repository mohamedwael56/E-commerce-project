import './CheckoutHeader.css'
export function CheckoutHeader({cart}){
  let totalItems=0;
  cart.forEach((item)=>{
    totalItems += item.quantity;
  });
  
  return(
      
              <div className="Header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid header-content">
            <a className="navbar-brand" href="/">
              Ym store
            </a>
            <a className=" navbar-brand" href="#">
              Checkout ({totalItems})
            </a>
            <a className="navbar-brand" href="orders">
              orders
            </a>
          </div>
        </nav>
      </div>

    )
}