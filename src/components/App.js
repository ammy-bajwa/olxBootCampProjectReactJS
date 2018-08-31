import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../store/action";
import { userHandler } from "../store/action";
import AppRoute from "../routes/Router";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

class App extends Component {
  state = {
    loading: true
  };
  decode = str => {
    return str.replace(/.{3}/g, c => {
      return String.fromCharCode(c);
    });
  };
  componentDidMount() {
    this.setState(() => ({
      loading: false
    }));
    if (!localStorage.getItem("offlineAds")) {
      let ads = [];
      localStorage.setItem("offlineAds", JSON.stringify(ads));
    }
    if (localStorage.getItem("userId")) {
      let userId = localStorage.getItem("userId");
      userId = JSON.parse(this.decode(userId));
      let email = userId.email;
      this.props.userHandler(userId);
      this.props.loginUser();
      let token = localStorage.getItem("token");
      axios({
        method: "post",
        url: "/message/settokken",
        data: {
          token,
          email
        }
      })
        .then(function(response) {
          if (response.data.message) {
            return console.log("cant set tokken");
          }
    
          console.log("tokken set");
        })
        .catch(function(error) {
          return console.log("cant set tokken");
        });
    }
  }
  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <div className="row align-middle w-100" id="mainApp">
        <AppRoute />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => dispatch(loginUser()),
    userHandler: user => dispatch(userHandler(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
