import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid w-100" id="homeMain">
        <Header history={this.props.history} />
        <div className="row">
          <div className="col-md-3">
            <Link to="/property">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/property.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Property for Sale</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/rent">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/rent.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Property for Rent</h5>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-3">
            <Link to="/vehicles">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/car.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Vehicles</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/bikes">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/bike.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Bikes</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Link to="/electronics">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/electronic.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Electronics & Home Appliances</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="mobiles">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/mobile.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Mobiles</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/jobs">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/businessman.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Jobs</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/services">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/customer.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Services</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <Link to="/buisiness">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/industry.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Business Industrial & Agriculture
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/furniture">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/furniture.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Furniture & Home Decorate</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/animals">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/animal.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Animals</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/fashion">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/fashion.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Fashion & Beauty </h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-3">
            <Link to="/books">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/books.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Books, Sports & Hobbies</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/kids">
              <div className="card">
                <div className="row h-100 justify-content-center align-items-center">
                  <img
                    className="card-img-top homeCard"
                    src="./images/kids.svg"
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">Kids</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default Home;
