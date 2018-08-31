import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

class Message extends Component {
  state = {
    messages: [],
    loading: true
  };
  decode = str => {
    return str.replace(/.{3}/g, c => {
      return String.fromCharCode(c);
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
                    <div className="card-body">
                      <h5 className="card-title">{Obj.ad[0].adTitle}</h5>
                      <hr />
                      <h5 className="card-title">Message</h5>
                      <p className="card-text">{Obj.senderMessage}</p>
                      <hr />
                      <h5 className="card-title">Sender Name</h5>
                      <p className="card-text">{Obj.senderName}</p>
                      <hr />
                      <h5 className="card-title">Send Email</h5>
                      <p className="card-text">{Obj.senderEmail}</p>
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
