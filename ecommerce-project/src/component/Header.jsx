import { useNavigate, useSearchParams } from "react-router"
import { useState } from "react"
import './Header.css'


export function Header(){


const [searchParams]=useSearchParams()
const searchValue=searchParams.get('search')||""

const [findProduct,setFindProduct]=useState(searchValue)
function searchedProduct (event){
setFindProduct(event.target.value)
}

const navigate=useNavigate()


function getProduct (event){
event.preventDefault();
  navigate(`/?search=${findProduct}`)
}


    return(
              <div className="header mb-5">
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Ym style</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto search-form" role="search">
        <input 
        className="form-control me-2 col-lg-6 " 
        type="search" placeholder="Search"
        aria-label="Search"
        onChange={searchedProduct}
        value={findProduct}
         />
        <button 
        className="btn btn-outline-success"
        type="submit"
        onClick={getProduct}
        >Search</button>
      </form>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="orders">Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="checkout">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>

    )
}