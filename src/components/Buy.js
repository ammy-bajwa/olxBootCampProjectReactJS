import React, { Component } from 'react';
import Header from './Header';
import axios from "axios";

class Buy extends Component {
    state = {
        ad: {}
    }
    offlineHandler = () =>{
        let adsArr = JSON.parse(localStorage.getItem('offlineAds'));
        let ad = this.state.ad;
        adsArr.push(ad);
        localStorage.setItem('offlineAds',JSON.stringify(adsArr));
    }
    getAdAuthor = (email) => {
        console.log(email);
        let self = this;
        axios({
            method: 'post',
            url: `/ad/adauthor`,
            data: {
                email
            }
        })
            .then(function (response) {
                self.setState((prevState)=>{
                    return {
                        ad:{
                            ...prevState.ad,
                            user: response.data.name,
                            contact:response.data.contact
                        }
                    }
                })
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        // console.log(JSON.parse(this.props.location.name))
        let ad;
        if (this.props.location.name) {
            ad = JSON.parse(this.props.location.name)
            localStorage.setItem('ad', this.props.location.name);
            this.getAdAuthor(ad.user);
        } else {
            ad = JSON.parse(localStorage.getItem('ad'));
            this.getAdAuthor(ad.user);
        }
        this.setState({
            ad
        })

    }
    render() {
        return (
            <div className="container-fluid">
                <Header  history={this.props.history} />
                <div className="mb-3">
                    <div className='container-fluid row h-100 justify-content-center align-items-center'>
                        <img className="card-img-top" src={this.state.ad.itemPic} alt="Card cap" />
                    </div>
                    <div className="card-body">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">{this.state.ad.adTitle}</h1>
                                <p className="card-text">Details Are As {this.state.ad.itemDetails}.</p><hr />
                                <p className="card-text"><b>Price</b> <span className='float-right'>{this.state.ad.price}</span>.</p><hr />
                                <p className="card-text"><b>Item Condition</b> <span className='float-right'>{this.state.ad.itemCondition}</span></p><hr />
                                <p className="card-text"><b>Posted By</b> <span className='float-right'>{this.state.ad.user}</span></p><hr />
                                <p className="card-text"><b>Ad Status</b> <span className='float-right'>{this.state.ad.status}</span></p><hr />
                                <p className="card-text"><b>Contact</b> <span className='float-right'><a href={`tel:${this.state.ad.contact}`}>{this.state.ad.contact}</a></span></p><hr />
                                <p className="card-text"><small className="text-muted">Posted Time Is <span className='float-right'>{this.state.ad.createdAt}</span></small></p><hr />
                                <button className="btn btn-dark" onClick={this.offlineHandler}>Save Ad Offine</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Buy;
