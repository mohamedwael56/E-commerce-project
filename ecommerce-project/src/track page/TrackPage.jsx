import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./TrackPage.css";

export function TrackPage() {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Ym style
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex ms-auto mt-sm-3 mb-sm-2" role="search">
                <input
                  className="form-control me-2 col-lg-6 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    account
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="orders"
                  >
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="checkout">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="page-wrapper">
<div className="product-details">
    <a href="orders" className="">View all orders</a>
    <h1>arriving on november 28</h1>
    <div>men cozy fleece hoodie light teal</div>
    <div>Quantity 1</div>
    <img src="/images/men-cozy-fleece-hoodie-light-teal.jpg" width="150px" />
</div>
</div>
  <div className="progress-content">
  <div>
    Preparing
  </div>
  <div className="progress-label active">
    Shipping
  </div>

  <div className="progress-label ">
    Delivered

  </div>
  </div>
<div className="progress " role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar bg-success" style={{width:"50%"}}></div>
</div>
    </>
  );
}
