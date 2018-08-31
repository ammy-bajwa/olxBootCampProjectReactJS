import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    dataArray: []
  };
  componentDidMount() {
    let ads = JSON.parse(localStorage.getItem("searchResult"));
    this.setState({
      dataArray: ads
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="container-fluid row h-100 justify-content-center align-items-center center-block">
          {this.state.dataArray.length === 0
            ? "No Ad"
            : this.state.dataArray.map((Obj, i) => {
                return (
                  <div className="card bodyCard d-inline-flex" key={i}>
                    <div className="row h-100 justify-content-center align-items-center">
                      <img
                        className="card-img-top bodyCardImg mt-3"
                        src={Obj.itemPic}
                        alt="Card cap"
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{Obj.adTitle}</h4>
                      <hr />
                      <h5 className="card-title ">Posted Time</h5>
                      <p className="card-text"> {Obj.createdAt}</p>
                      <h5 className="card-title">Price</h5>
                      <p className="card-text">RS {Obj.price}</p>
                      <div className="container-fluid row h-100 justify-content-center align-items-center">
                        <Link
                          to={{
                            pathname: `/${Obj.catogary}/${
                              Obj.subCatogary
                            }/ads/buy`,
                            name: `${JSON.stringify(Obj)}`,
                            state: { fromDashboard: true }
                          }}
                        >
                          <button className="btn btn-outline-primary">
                            Buy
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

export default Search;
