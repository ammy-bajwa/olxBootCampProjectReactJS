import React, { Component } from "react";
import { Link } from "react-router-dom";

class Body extends Component {
  state = {
    dataArray: []
  };
  componentDidMount() {
    this.setState({
      dataArray: this.props.dataArray
    });
  }
  render() {
    return (
      <div className="container">
      <div className="row">
        {this.state.dataArray.length == 0
          ? ""
          : this.state.dataArray.map((Obj, i) => {
              return (
                <div className="col-md-3" key={i}>
                  <div className="card">
                    <Link to={`${Obj.link}/ads`}>
                      <div className="row h-100 justify-content-center align-items-center">
                        <img
                          className="card-img-top bodyCardImg mt-3"
                          src={Obj.image}
                          alt="Card cap"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{Obj.name}</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Body;
