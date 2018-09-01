import React, { Component } from "react";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import moment from "moment";
import { connect } from "react-redux";

class SendMessage extends Component {
  state = {
    offlineAds: []
  };
  success = () => {
    toast.success("Message Send Successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    });
  };
  error = () => {
    toast.error("Something Went Wrong!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    });
  };
  messageHandler = e => {
    let self = this;
    e.preventDefault();
    let senderName = this.props.user.name;
    let senderEmail = this.props.user.email;
    let senderMessage = document.getElementById("message").value;
    let adAuthor = this.state.ad.userEmail;
    let adId = this.state.ad._id;
    let createdAt = moment().format("MMMM Do YYYY, h:mm:ss a");
    document.getElementById("sendBtn").setAttribute("disabled", "true");
    axios({
      method: "post",
      url: "/message/send",
      data: {
        senderName,
        senderEmail,
        senderMessage,
        adAuthor,
        adId,
        createdAt
      }
    })
      .then(function(response) {
        if (response.data.message) {
          document.getElementById("sendBtn").removeAttribute("disabled");
          self.error();
          return;
        }
        self.success();
        setTimeout(() => {
          self.props.history.goBack();
        }, 2000);
      })
      .catch(function(error) {
        self.error();
        document.getElementById("sendBtn").removeAttribute("disabled");
        console.log(error);
      });
  };
  componentDidMount() {
    let ad;
    if (this.props.location.name) {
      ad = JSON.parse(this.props.location.name);
    } else {
      ad = JSON.parse(localStorage.getItem("ad"));
    }
    this.setState(prevState => {
      return {
        ...prevState,
        ad
      };
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header history={this.props.history} />
        <h1 className="text-center mt-5 mb-4">Enter Message</h1>
        <div>
          <ToastContainer />
        </div>
        <div className="row h-100 justify-content-center">
          <form onSubmit={this.messageHandler}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Enter Message</span>
              </div>
              <textarea
                className="form-control"
                aria-label="With textarea"
                id="message"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary mt-4"
              id="sendBtn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user
  };
};
export default connect(mapStateToProps)(SendMessage);
