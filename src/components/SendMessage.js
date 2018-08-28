import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SendMessage extends Component {
    state = {
        offlineAds: []
    }
    success = () => {
        toast.success("Message Send Successfully!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        });

    }
    error = () => {
        toast.error("Something Went Wrong!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        });

    }
    messageHandler = (e) => {
        let self = this;
        e.preventDefault();
        let senderName = document.getElementById('senderName').value;
        let senderEmail = document.getElementById('searchSelect').value;
        let senderMessage = document.getElementById('message').value;
        let adAuthor = this.state.ad.userEmail;
        let adId = this.state.ad._id;
        }
    componentDidMount() {
        let ad;
        if (this.props.location.name) {
            ad = JSON.parse(this.props.location.name)
        } else {
            ad = JSON.parse(localStorage.getItem('ad'));
        }
        this.setState({
            ad
        })
        
       
    }

    render() {
        return (
            <div className="container-fluid">
                <Header history={this.props.history} /><h1 className='text-center mt-5'>Enter Message</h1>
                <div>
                    <ToastContainer />
                </div><div className='row h-100 justify-content-center align-items-center'>
                    <form onSubmit={this.messageHandler}>
                        <div className="form-group">
                            <label htmlFor="senderName">Name</label>
                            <input type="text" className="form-control" name="email" id="senderName"
                             aria-describedby="Name Help" placeholder="Enter Name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="senderEmail">Email address</label>
                            <input type="email" className="form-control" name="senderEmail" 
                            id="senderEmail" aria-describedby="emailHelp" placeholder="Enter email" required/>
                          </div>
                          <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Enter Message</span>
                                </div>
                                <textarea className="form-control" aria-label="With textarea" id='message' required></textarea>
                            </div>
                        <button type="submit" className="btn btn-dark mt-4">Send Message</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SendMessage;
