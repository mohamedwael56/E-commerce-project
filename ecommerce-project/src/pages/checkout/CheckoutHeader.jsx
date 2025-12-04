import './CheckoutHeader.css'
import { Link } from 'react-router';
export function CheckoutHeader({cart}){
  let totalItems=0;
  cart.forEach((item)=>{
    totalItems += item.quantity;
  });
  
  return(
      
              <div className="Header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid header-content">
            <Link className="navbar-brand" to="/">
              Ym store
            </Link>
            <a className=" navbar-brand" href="#">
              Checkout ({totalItems})
            </a>
            <Link className="navbar-brand" to="/orders">
              orders
            </Link>
          </div>
        </nav>
      </div>

    )
}