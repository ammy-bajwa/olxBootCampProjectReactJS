import React, { Component } from 'react';
import Header from './Header';
import axios from "axios";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class User extends Component {
    state = {
        dataArray: [],
        offlineAds: []
    }
    success = () => {
        toast.success("Operation Successfully Completed!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        });

    }
    offlineDeleteHandler = (ad) => {
        let offlineAds = JSON.parse(localStorage.getItem('offlineAds'));
        let id = ad._id
        offlineAds = offlineAds.filter((item) => item._id !== id);
        localStorage.setItem('offlineAds', JSON.stringify(offlineAds))
        this.setState((prevState) => {
            return {
                ...prevState,
                offlineAds
            }
        })
        this.success();
    }
    deleteHandler = (ad) => {
        let id = ad._id;
        let self = this;
        axios({
            method: 'post',
            url: '/ad/remove',
            data: {
                id
            }
        })
            .then(function (response) {
                let dataArray = self.state.dataArray;
                dataArray = dataArray.filter((item) => item._id !== id)
                console.log(dataArray)
                console.log(id);
                self.setState({
                    dataArray
                }
                )
                self.success();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        let email = this.props.user.email;
        let self = this;
        axios({
            method: 'post',
            url: '/user/ads',
            data: {
                email
            }
        })
            .then(function (response) {
                self.setState((prevState) => {
                    return {
                        ...prevState,
                        dataArray: response.data
                    }
                });
                console.log(response);
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        let offlineAds = JSON.parse(localStorage.getItem('offlineAds'));
        this.setState((prevState) => {
            return {
                ...prevState,
                offlineAds
            }
        })
    }
    render() {
        return (
            <div className="container-fluid" id='postAdMain'>
                <Header history={this.props.history} />
                <div>
                    <ToastContainer />
                </div>
                <h1 className='text-center m-5'>All Ads Posted By You</h1>
                <div className="container-fluid row h-100 justify-content-center align-items-center center-block">
                    {
                        this.state.dataArray.length === 0 ? 'No Ad' : this.state.dataArray.map((Obj, i) => {
                            return <div className="card bodyCard d-inline-flex" key={i}>
                                <div className='row h-100 justify-content-center align-items-center'>
                                    <img className="card-img-top bodyCardImg mt-3" src={Obj.itemPic} alt="Card cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{Obj.adTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted ">Posted Time{Obj.createdAt}</h6><hr />
                                    <h6 className="card-subtitle mb-2 text-muted">Condition{Obj.itemCondition} By 10</h6><hr />
                                    <h6 className="card-subtitle mb-2 text-muted">Price Is {Obj.price}</h6><hr />
                                    <h6 className="card-subtitle mb-2 text-muted">Posted By{Obj.user}</h6><hr />
                                    <p className="card-text">Details : {Obj.itemDetails} </p>
                                    <div className='container-fluid row h-100 justify-content-center align-items-center'>
                                        <Link to={{
                                            pathname: `/${Obj.catogary}/${Obj.subCatogary}/ads/buy`,
                                            name: `${JSON.stringify(Obj)}`,
                                            state: { fromDashboard: true }
                                        }}>
                                            <button className='btn btn-dark'>Details</button>
                                        </Link>
                                        <button className='btn btn-danger ml-3' onClick={() => this.deleteHandler(Obj)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <h1 className='text-center m-5'>All Offline Ads</h1>
                <div className="container-fluid row h-100 justify-content-center align-items-center center-block">
                    {
                        this.state.offlineAds.length === 0 ? 'No Ad' : this.state.offlineAds.map((Obj, i) => {
                            return <div className="card bodyCard d-inline-flex" key={i}>
                                <div className='row h-100 justify-content-center align-items-center'>
                                    <img className="card-img-top bodyCardImg mt-3" src={Obj.itemPic} alt="Card cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{Obj.adTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted ">Posted Time{Obj.createdAt}</h6><hr />
                                    <h6 className="card-subtitle mb-2 text-muted">Condition{Obj.itemCondition} By 10</h6><hr />
                                    <h6 className="card-subtitle mb-2 text-muted">Price Is {Obj.price}</h6><hr />
                                    <h6 className="card-subtitle mb-2 text-muted">Posted By{Obj.user}</h6><hr />
                                    <p className="card-text">Details : {Obj.itemDetails} </p>
                                    <div className='container-fluid row h-100 justify-content-center align-items-center'>
                                        <Link to={{
                                            pathname: `/${Obj.catogary}/${Obj.subCatogary}/ads/buy`,
                                            name: `${JSON.stringify(Obj)}`,
                                            state: { fromDashboard: true }
                                        }}>
                                            <button className='btn btn-dark'>Details</button>
                                        </Link>
                                        <button className='btn btn-danger ml-3' onClick={() => this.offlineDeleteHandler(Obj)}>Delete</button>

                                    </div>
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

export default connect(mapStateToProps)(User);
