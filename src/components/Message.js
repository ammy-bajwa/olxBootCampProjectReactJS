import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import axios from "axios";

class Message extends Component {
    state = {
        messages: []
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
        let userEmail = user.email
        console.log(user)
        axios({
            method: 'post',
            url: '/message/receive',
            data: {
                userEmail
            }
        })
            .then(function (response) {
                self.setState({
                    messages: response.data
                })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="container-fluid">
                <Header history={this.props.history} />
                <h1 className='text-center mt-5'>All Messages</h1>
                <div className="container-fluid row h-100 justify-content-center align-items-center">
                    {
                        this.state.messages.length == 0 ? 'No Message' : this.state.messages.map((Obj, i) => {
                            return <div className="card bodyCard d-inline-flex" key={i}>
                                <div className='row h-100 justify-content-center align-items-center'>
                                    <img class="card-img-top" src={`${Obj.ad[0].itemPic}`} alt="Card image cap" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">{Obj.ad[0].adTitle}</h5>
                                    <p class="card-text">{Obj.senderMessage}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
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
