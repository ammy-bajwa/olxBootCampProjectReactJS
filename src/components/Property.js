import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Property extends Component {
    state = {
        dataArray: [
            {
                name: 'Apartments & Flats',
                image: './images/apartment.svg',
                link:'/property/apartments'
            },
            {
                name: 'Houses',
                image: './images/home.svg',
                link:'/property/houses'
            },
            {
                name: 'Land & Plots',
                image: './images/land.svg',
                link:'/property/lands'
            },
            {
                name: 'Portions & Floors',
                image: './images/portion.svg',
                link:'/property/portions'
            },
            {
                name: 'Shops - Offices - Commercial Space',
                image: './images/shop.svg',
                link:'/property/shops'
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

export default Property;
