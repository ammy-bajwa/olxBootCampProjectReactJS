import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';
import { loginUser } from '../store/action';
import { userHandler } from '../store/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var socket;
class Login extends Component {
    success = () => {
        toast.success("Login Successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        });

    }
    error = () => {
        toast.error('Internal Error Occured', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    }
    notFound = () => {
        toast.error('User Not Found', {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    }
    encode = (str) => {
        return str.replace(/./g, (c) => {
            return ('00' + c.charCodeAt(0)).slice(-3);
        });
    }


    formHandler = (e) => {
        e.preventDefault();
        let email = document.getElementById('loginEmail').value;
        let password = document.getElementById('loginPassword').value;
        let keepLoggedIn = document.getElementById('checkLoggedIn').checked;
        document.getElementById('sendBtn').setAttribute('disabled','true');
        let self = this;
        let token = localStorage.getItem('token');
        axios({
            method: 'post',
            url: '/user/signin',
            data: {
                email, password,token
            }
        })
            .then(function (response) {
                if (response.data.message) {
                    self.error();
                    document.getElementById('sendBtn').removeAttribute('disabled');
                    return
                }
                if (response.data.notFound) {
                    self.notFound();
                    setTimeout(() => {
                        self.props.history.push('/signup');
                    }, 2000);
                    return
                }
                if (keepLoggedIn) {
                    let userId = self.encode(JSON.stringify(response.data));
                    localStorage.setItem('userId', userId)
                }
                self.props.userHandler(response.data);
                self.props.loginUser();
                self.success();
                setTimeout(() => {
                    self.props.history.goBack();
                }, 2000);
            })
            .catch(function (error) {
                document.getElementById('sendBtn').removeAttribute('disabled');
                self.error();
                console.log(error);
            });

    }
    render() {
        return (
            <div className="container-fluid">
                <Header history={this.props.history} />
                <div>
                    <ToastContainer />
                </div>
                <div className='row h-100 justify-content-center align-items-center'>
                    <form onSubmit={this.formHandler}>
                        <div className="form-group">
                            <label htmlFor="loginEmail">Email address</label>
                            <input type="email" className="form-control" name="email" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password" className="form-control" name="password" id="loginPassword" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="checkLoggedIn" />
                            <label className="form-check-label" htmlFor="checkLoggedIn">Keep Me Logged in</label>
                        </div>
                        <button type="submit" className="btn btn-outline-primary mr-2" id='sendBtn'>Submit</button>
                        <Link to='/signup'>
                            <button type="button" className="btn btn-outline-primary">Sign Up</button>
                        </Link>
                    </form>
                </div>
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

export default connect(null, mapDispatchToProps)(Login);
