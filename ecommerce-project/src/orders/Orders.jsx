import './Orders.css';
export function Orders (){

    return(
        <>
   <div className="header">
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Ym style</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto mt-sm-3 mb-sm-2" role="search">
        <input className="form-control me-2 col-lg-6 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                <li className="nav-item">
          <a className="nav-link active" href="#">account</a>
        </li>

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
          
    <div className="container mt-5 pt-5">
        
        <div className="card" style={{width: "50rem",height:"20rem"}}>
  <div className="card-body">
<div className="d-flex justify-content-between w-100">

  <div>
    <div>Order placed:</div>
    <div>November 21</div>
  </div>

  <div>
    <div>Total:</div>
    <div>$20.89</div>
  </div>

  <div>
    <div>Order ID:</div>
    <div>537cc136-4fcd-4bc3-b4fb-0c01b32f9c58</div>
  </div>

</div>
  <hr />

<div className="container d-flex justify-content-start ">
<img src="/images/intermediate-composite-basketball.jpg" alt=""  className="object-fit-cover" style={{width:"130px", height:"130px"}} />
<div className="">
<div className="d-flex mb-2 order-name">Intermediate composite basketball</div>
<div className="d-flex ">Arriving on: november 28</div>
<div className="d-flex mb-2">Quantity: 1</div>
<div>
<button  type="button" className="btn btn-success d-flex mb-2"> Add to cart</button>
</div>
<button type="button" className="btn btn-light d-flex">Track Package</button>

</div>
</div>

  </div>
</div>

    </div>
    <div className="container">
        
        <div className="card" style={{width: "50rem",height:"30rem"}}>
<div className="d-flex justify-content-between w-100">

  <div>
    <div>Order placed:</div>
    <div>November 21</div>
  </div>

  <div>
    <div>Total:</div>
    <div>$20.89</div>
  </div>

  <div>
    <div>Order ID:</div>
    <div>537cc136-4fcd-4bc3-b4fb-0c01b32f9c58</div>
  </div>

</div>
  <hr />

<div className="container d-flex justify-content-start ">
<img src="/images/men-cozy-fleece-hoodie-light-teal.jpg" alt=""  className="object-fit-cover" style={{width:"130px", height:"130px"}} />
<div className="">
<div className="d-flex mb-2 order-name">Intermediate composite basketball</div>
<div className="d-flex ">Arriving on: november 28</div>
<div className="d-flex mb-2">Quantity: 1</div>
<div>
<button  type="button" className="btn btn-success d-flex mb-2"> Add to cart</button>
</div>
<button type="button" className="btn btn-light d-flex">Track Package</button>

</div>
</div>

   <div className="mt-4">
<div className="d-flex justify-content-between w-100">

  

</div>

<div className="container d-flex justify-content-start ">
<img src="/images/men-brown-flat-sneakers.jpg" alt=""  className="object-fit-cover" style={{width:"130px", height:"130px"}} />
<div className="">
<div className="d-flex mb-2 order-name">Intermediate composite basketball</div>
<div className="d-flex ">Arriving on: november 28</div>
<div className="d-flex mb-2">Quantity: 1</div>
<div>
<button  type="button" className="btn btn-success d-flex mb-2"> Add to cart</button>
</div>
<button type="button" className="btn btn-light d-flex">Track Package</button>

</div>
</div>

  </div>
</div>

    </div>
    </>  
      )
}