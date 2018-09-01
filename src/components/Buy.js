import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "./LoadingScreen";

class Buy extends Component {
  state = {
    ad: {},
    btnVisibility: true,
    loading: true
  };
  error = () => {
    toast.error("Already Saved", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };
  success = () => {
    toast.success("Successfully Saved Offline", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };
  offlineHandler = () => {
    let adsArr = JSON.parse(localStorage.getItem("offlineAds"));
    let ad = this.state.ad;
    let id = ad._id;
    let copy = false;
    adsArr.map(item => {
      if (item._id == id) {
        copy = true;
        return this.error();
      }
    });
    if (!copy) {
      adsArr.push(ad);
      localStorage.setItem("offlineAds", JSON.stringify(adsArr));
      this.success();
    }
  };
  getAdAuthor = email => {
    let self = this;
    axios({
      method: "post",
      url: `/ad/adauthor`,
      data: {
        email
      }
    })
      .then(function(response) {
        if (self.props.user) {
          if (response.data.email == self.props.user.email) {
            self.setState({ btnVisibility: false });
          }
        }
        if (response.data.name) {
          self.setState(prevState => {
            return {
              ...prevState,
              ad: {
                ...prevState.ad,
                user: response.data.name,
                userEmail: response.data.email,
                contact: response.data.contact
              },
              loading: false
            };
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    let ad;
    if (this.props.location.name) {
      ad = JSON.parse(this.props.location.name);
      localStorage.setItem("ad", this.props.location.name);
      this.getAdAuthor(ad.user);
    } else {
      ad = JSON.parse(localStorage.getItem("ad"));
      this.getAdAuthor(ad.user);
    }
    this.setState({
      ad
    });
    if (ad.userPath) {
      this.setState({ btnVisibility: false });
    }
  }
  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <div className="container-fluid">
        <Header history={this.props.history} />
        <div className="mt-5">
          <div className="container-fluid row h-100 justify-content-center align-items-center">
            <img
              className="w-20 mt-3"
              src={this.state.ad.itemPic}
              alt="Card cap"
            />
          </div>
          <div className="card-body">
            <div className="jumbotron jumbotron-fluid" id="adDetails">
              <div className="container">
                <h1 className="display-4">{this.state.ad.adTitle}</h1>
                <p className="card-text">
                  Details Are As {this.state.ad.itemDetails}.
                </p>
                <hr />
                <p className="card-text">
                  <b>Price</b>{" "}
                  <span className="float-right">{this.state.ad.price}</span>.
                </p>
                <hr />
                <p className="card-text">
                  <b>Item Condition</b>{" "}
                  <span className="float-right">
                    {this.state.ad.itemCondition}
                  </span>
                </p>
                <hr />
                <p className="card-text">
                  <b>Posted By</b>{" "}
                  <span className="float-right">{this.state.ad.user}</span>
                </p>
                <hr />
                <p className="card-text">
                  <b>Ad Status</b>{" "}
                  <span className="float-right">{this.state.ad.status}</span>
                </p>
                <hr />
                <p className="card-text">
                  <b>Contact</b>{" "}
                  <span className="float-right">
                    <a href={`tel:${this.state.ad.contact}`}>
                      {this.state.ad.contact}
                    </a>
                  </span>
                </p>
                <hr />
                <p className="card-text">
                  <small className="text-muted">
                    Posted Time Is{" "}
                    <span className="float-right">
                      {this.state.ad.createdAt}
                    </span>
                  </small>
                </p>
                <hr />
                <button
                  className="btn btn-outline-primary"
                  onClick={this.offlineHandler}
                >
                  Save Ad Offine
                </button>
                {this.state.btnVisibility ? (
                  <Link
                    to={{
                      pathname: `/sendmessage`,
                      name: `${JSON.stringify(this.state.ad)}`,
                      state: { fromDashboard: true }
                    }}
                  >
                    <button className="btn btn-outline-primary ml-3">
                      Send Message
                    </button>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Buy);
