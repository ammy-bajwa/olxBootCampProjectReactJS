import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Buisiness extends Component {
    state = {
        dataArray: [
            {
                name: 'Agriculture',
                image: './images/farmer.svg',
                link:'/buisiness/agriculture'
            },
            {
                name: 'Construction & Heavy Machinery',
                image: './images/crane.svg',
                link:'/buisiness/construction'
            },
            {
                name: 'Medical & Pharma',
                image: './images/pills.svg',
                link:'/buisiness/medical'
            },
            {
                name: 'Food & Restaurants',
                image: './images/diet.svg',
                link:'/buisiness/food'
            },
            {
                name: 'Trade & Industrial',
                image: './images/factory.svg',
                link:'/buisiness/trade'
            },
            {
                name: 'Business for Sale',
                image: './images/forSale.svg',
                link:'/buisiness/sale'
            },
            {
                name: 'Other Business & Industry',
                image: './images/business.svg',
                link:'/buisiness/industry'
            }
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                <Header  history={this.props.history} />
                <Body dataArray={this.state.dataArray} />
            </div>
        );
    }
}

export default Buisiness;
