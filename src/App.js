import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./css/dashboard.css";
import Products from "./components/products";
import ProductList from "./components/productList";
import ProductDetails from "./components/productDetails";

// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  handleProductClick() {
    console.log("App: handleProductClick()");
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://google.com"
          >
            BTFL
          </a>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-shopping-cart"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      Products <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <div className="content">
                <Switch>
                  <Route path="/not-found" component={Products} />
                  <Route
                    path="/products/:id"
                    render={props => <ProductDetails {...props} />}
                  />
                  <Route
                    path="/"
                    render={props => (
                      <ProductList
                        onProductClick={this.handleProductClick}
                        products={this.state.products}
                        {...props}
                      />
                    )}
                  />
                  <Redirect to="/not-found" />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
