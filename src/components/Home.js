import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid" id='homeMain'>
                <Header  history={this.props.history}/>
                <div className="card-deck">
                    <div className="card d-flex flex-column">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/property.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/property'>
                                <h5 className="card-title">Property for Sale</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/rent.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/rent'>
                                <h5 className="card-title">Property for Rent</h5>
                            </Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/car.png" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/vehicles'>
                                <h5 className="card-title">Vehicles</h5>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/bike.png" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/bikes'>
                                <h5 className="card-title">Bikes</h5>
                            </Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/electronic.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/electronics'>
                                <h5 className="card-title">Electronics & Home Appliances</h5>
                            </Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/mobile.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='mobiles'>
                                <h5 className="card-title">Mobiles</h5>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/jobs.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/jobs'>
                                <h5 className="card-title">Jobs</h5>
                            </Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/customer.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/services'>
                                <h5 className="card-title">Services</h5>
                            </Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/industry.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/buisiness'>
                                <h5 className="card-title">Business Industrial & Agriculture</h5>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/furniture.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/furniture'>
                                <h5 className="card-title">Furniture & Home Decorate</h5>
                            </Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/animal.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/animals'>
                                <h5 className="card-title">Animals</h5>
                            </Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCard" src="./images/fashion.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/fashion'>
                                <h5 className="card-title">Fashion & Beauty </h5>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className='row justify-content-center align-items-center'>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCardLast" src="./images/books.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/books'>
                                <h5 className="card-title">Books, Sports & Hobbies</h5>
                            </Link>

                        </div>
                    </div>
                    <div className="card">
                        <div className='row h-100 justify-content-center align-items-center'>
                            <img className="card-img-top homeCardLast" src="./images/kids.svg" alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <Link to='/kids'>
                                <h5 className="card-title">Kids</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;