import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Kids extends Component {
    state = {
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
    componentDidMount() {
        let offlineAds = JSON.parse(localStorage.getItem('offlineAds'));
        this.setState((prevState) => {
            return {
                offlineAds
            }
        })
    }
    render() {
        return (
            <div className="container-fluid m-4">
                <Header history={this.props.history} /><h1 className='text-center mt-5'>All Offline Ads</h1>
                <div>
                    <ToastContainer />
                </div>
                <div className="container-fluid row h-100 justify-content-center align-items-center center-block">
                    {
                        this.state.offlineAds.length === 0 ? 'No Ad' : this.state.offlineAds.map((Obj, i) => {
                            return <div className="card bodyCard d-inline-flex" key={i}>
                                <div className='row h-100 justify-content-center align-items-center'>
                                    <img className="card-img-top bodyCardImg" src={Obj.itemPic} alt="Card cap" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{Obj.adTitle}</h4>
                                    <hr />
                                    <h5 className="card-title ">Posted Time</h5>
                                    <p className="card-text"> {Obj.createdAt}</p>
                                    <h5 className="card-title">Price</h5>
                                    <p className="card-text">RS {Obj.price}</p>
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

export default Kids;
