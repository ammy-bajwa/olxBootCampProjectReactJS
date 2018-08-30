import React, { Component } from 'react';
import moment from 'moment';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from "axios";

class Ads extends Component {
    state = {
        dataArray: []
    }
    componentDidMount() {
        let componentThis = this;
        axios({
            method: 'get',
            url: `${this.props.location.pathname}`,
        })
            .then(function (response) {
                componentThis.setState({
                    dataArray: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        // this.setState({
        //     dataArray: [{
        //         name: 'My Add Name',
        //         picture: '/images/iron.svg',
        //         details: 'My Add Details',
        //         condition: 'My Ad Condition',
        //         postedBy: 'poster name',
        //         buyBy: 'customer name',
        //         createdAt: moment().format('MMMM Do YYYY, h:mm:ss a'),
        //         price: 15000,
        //         link: '/books/music/ads/buy',
        //         status: 'active',
        //         contact: 30406548654,

        //     }]
        // })
    }
    render() {
        return (
            <div className='container-fluid'>
                <Header  history={this.props.history} visible={true}  postAddress={document.location.pathname}/>
                <div className="container-fluid row h-100 justify-content-center align-items-center center-block">
                    {
                        this.state.dataArray.length === 0  ? 'No Ad' : this.state.dataArray.map((Obj, i) => {
                            return <div className="card bodyCard d-inline-flex" key={i}>
                                <div className='row h-100 justify-content-center align-items-center'>
                                    <img className="card-img-top bodyCardImg mt-3" src={Obj.itemPic} alt="Card cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{Obj.adTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted ">Posted Time {Obj.createdAt}</h6><hr/>
                                    <h6 className="card-subtitle mb-2 text-muted">Condition {Obj.itemCondition} By 10</h6><hr/>
                                    <h6 className="card-subtitle mb-2 text-muted">Price Is {Obj.price}</h6><hr/>
                                    <h6 className="card-subtitle mb-2 text-muted">Posted By {Obj.user}</h6><hr/>
                                    <p className="card-text">Details : {Obj.itemDetails} </p>
                                    <div className='container-fluid row h-100 justify-content-center align-items-center'>
                                        <Link to={{
                                            pathname: `/${Obj.catogary}/${Obj.subCatogary}/ads/buy`,
                                            name: `${JSON.stringify(Obj)}`,
                                            state: { fromDashboard: true }
                                        }}>
                                            <button className='btn btn-outline-primary'>Buy</button>
                                        </Link>
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

export default Ads;
