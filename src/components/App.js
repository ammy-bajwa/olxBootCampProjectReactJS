import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/action';
import { userHandler } from '../store/action';
import AppRoute from '../routes/Router';

class App extends Component {
  decode = (str) => {
    return str.replace(/.{3}/g, (c) => {
      return String.fromCharCode(c);
    });
  }
  componentDidMount() {
    if (!localStorage.getItem('offlineAds')) {
      let ads = [];
      localStorage.setItem('offlineAds', JSON.stringify(ads));
    }
    if (localStorage.getItem('userId')) {

      let userId = localStorage.getItem('userId');
      userId = JSON.parse(this.decode(userId));
      this.props.userHandler(userId);
      this.props.loginUser();
    }
  }
  render() {
    return (
      <div className="row align-middle w-100" id='mainApp'>
        <AppRoute />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => dispatch(loginUser()),
    userHandler: (user) => dispatch(userHandler(user))
  }
}

export default connect(null, mapDispatchToProps)(App);