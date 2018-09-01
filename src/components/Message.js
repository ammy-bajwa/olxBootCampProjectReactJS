import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "./LoadingScreen";

class Message extends Component {
  success = () => {
    toast.success("Operation Successfully!", {
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
  state = {
    messages: [],
    loading: true
  };
  decode = str => {
    return str.replace(/.{3}/g, c => {
      return String.fromCharCode(c);
    });
  };
  messageDeleteHandler = message => {
    let messages = this.state.messages;
    let self = this;
    let id = message._id;
    messages = messages.filter(item => item._id !== id);
    document.getElementById("del").setAttribute("disabled", true);
    this.setState(prevState => {
      return {
        ...prevState,
        messages
      };
    });
    axios({
      method: "post",
      url: "/message/delete",
      data: {
        id
      }
    })
      .then(function(response) {
        if (response.data.message) {
          return self.error();
        }
        return self.success();
      })
      .catch(function(error) {
        self.error();
        console.log(error);
      });
  };
  replyMessage = message => {
    let self = this;
    let senderName = this.props.user.name;
    let senderEmail = this.props.user.email;
    let senderMessage = document.getElementById("message").value;
    let messageReceiver = message.senderEmail;
    let adId = message.ad[0]._id;
    let messageId = message._id;
    let createdAt = moment().format("MMMM Do YYYY, h:mm:ss a");
    document.getElementById("sendBtn").setAttribute("disabled", "true");
    axios({
      method: "post",
      url: "/message/reply",
      data: {
        senderName,
        senderEmail,
        senderMessage,
        messageReceiver,
        adId,
        createdAt,
        messageId
      }
    })
      .then(function(response) {
        if (response.data.message) {
          document.getElementById("sendBtn").removeAttribute("disabled");
          self.error();
          return;
        }
        let messages = self.state.messages;
        (messages = messages.map(message => {
          if (message._id == messageId) {
            message = {
              ...message,
              replyStatus: "true"
            };
            return message;
          }
          return message;
        })),
        self.setState(prevState => {
          return {
            messages,
            loading: false
          };
        });
        self.success();
        setTimeout(() => {
          document.getElementById("modalCloseBtn").click();
        }, 2000);
        document.getElementById("sendBtn").removeAttribute("disabled");
      })
      .catch(function(error) {
        document.getElementById("sendBtn").removeAttribute("disabled");
        self.error();
        console.log(error);
      });
  };
  componentDidMount() {
    let user;
    if (localStorage.getItem("userId")) {
      user = localStorage.getItem("userId");
      user = JSON.parse(this.decode(user));
    }
    let self = this;
    user = this.props.user;
    let userEmail = user.email;
    axios({
      method: "post",
      url: "/message/receive",
      data: {
        userEmail
      }
    })
      .then(function(response) {
        self.setState({
          messages: response.data,
          loading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <div className="container-fluid mt-4">
        <Header history={this.props.history} />
        <h1 className="text-center mt-5">All Messages</h1>
        <div>
          <ToastContainer />
        </div>
        <div className="container-fluid row h-100 justify-content-center align-items-center">
          {this.state.messages.length == 0
            ? "No Message"
            : this.state.messages.map((Obj, i) => {
                return (
                  <div className="card bodyCard d-inline-flex" key={i}>
                    <div className="row h-100 justify-content-center align-items-center">
                      <img
                        className="card-img-top"
                        src={`${Obj.ad[0].itemPic}`}
                        alt="Card image cap"
                      />
                    </div>
                    {Obj.replyStatus == "false" ? (
                      <div className="alert alert-danger m-3" role="alert">
                        You did`t reply to this message yet
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{Obj.ad[0].adTitle}</h5>
                      <hr />
                      <h5 className="card-title">Message</h5>
                      <p className="card-text">{Obj.senderMessage}</p>
                      <hr />
                      <h5 className="card-title">Sender Name</h5>
                      <p className="card-text">{Obj.senderName}</p>
                      <hr />
                      <h5 className="card-title">Sender Email</h5>
                      <p className="card-text">{Obj.senderEmail}</p>
                    </div>
                    <div
                      className="modal fade"
                      id="messageModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="messageModal"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title text-dark"
                              id="exampleModalLongTitle"
                            >
                              Enter Reply
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <div className="row h-100 justify-content-center">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    Enter Message
                                  </span>
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
                                onClick={() => this.replyMessage(Obj)}
                              >
                                Send Message
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-primary mt-4 ml-3"
                                data-dismiss="modal"
                                id="modalCloseBtn"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container-fluid row h-100 justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-primary"
                        data-toggle="modal"
                        data-target="#messageModal"
                      >
                        Reply
                      </button>

                      <button
                        className="btn btn-danger ml-3"
                        id="del"
                        onClick={() => this.messageDeleteHandler(Obj)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
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

export default connect(mapStateToProps)(Message);
