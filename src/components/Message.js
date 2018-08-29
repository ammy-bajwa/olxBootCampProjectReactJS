import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import axios from "axios";

class Message extends Component {
    state = {
        messages: [],
        ads: []
    }
    decode = (str) => {
        return str.replace(/.{3}/g, (c) => {
          return String.fromCharCode(c);
        });
      }
    componentDidMount() {
        let user;
        if (localStorage.getItem('userId')) {

            user = localStorage.getItem('userId');
            user = JSON.parse(this.decode(user));

          }
        let self = this;
            user = this.props.user;
        let userId = user._id
            console.log(user)
        axios({
            method: 'post',
            url: '/message/receive',
            data: {
                userId
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="container-fluid">
                <Header history={this.props.history} /><h1 className='text-center mt-5'>Enter Message</h1>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Message);
