import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function Home() {
  return (
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
<div className="d-flex justify-content-around flex-wrap  ">
<div className="card m-3" style={{width: "15rem"}}>
  <img src="../../public/images/intermediate-composite-basketball.jpg" className="card-img-top  " alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">intermediate composite basketball</h5>
    <p className="card-text opacity-0">Added.</p>
   <div>
     <select  aria-label="Default select example" className=" mb-2 mt-2">
  <option selected>0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
</div>

    <button href="#" className="btn btn-primary">Add To Cart</button>
  </div>
</div>

<div className="card m-3" style={{width: "15rem"}}>
  <img src="../../public/images/men-brown-flat-sneakers.jpg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title ">men brown flat sneakers</h5>
    <p className="card-text opacity-0">Added.</p>
      <div className="mt-3">
     <select className=" mb-2 mt-2" aria-label="Default select example" >
  <option selected>0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
</div>

    <button href="#" className="btn btn-primary">Add To Cart</button>
  </div>
</div>
<div className="card m-3" style={{width: "15rem"}}>
  <img src="/images/men-cozy-fleece-hoodie-light-teal.jpg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">men cozy fleece hoodie light teal</h5>
    <p className="card-text opacity-0">Added.</p>
      <div>
     <select aria-label="Default select example" className=" mb-2 mt-2">
  <option selected>0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
</div>

    <button href="#" className="btn btn-primary">Add To Cart</button>
  </div>
</div>
</div>
    </>
  );
}
