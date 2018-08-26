import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Rent extends Component {
    state = {
        dataArray: [
            {
                name: 'Apartments & Flats',
                image: './images/apartment.svg',
                link:'/rent/apartments'
            },
            {
                name: 'Houses',
                image: './images/home.svg',
                link:'/rent/houses'       
            },
            {
                name: 'Lands & Plots',
                image: './images/land.svg',
                link:'/rent/lands'
            },
            {
                name: 'Portions & Floors',
                image: './images/portion.svg',    
                link:'/rent/portions'         
            },
            {
                name: 'Shops - Offices - Commercial Space',
                image: './images/shop.svg',              
                link:'/rent/shops'
            },
            {
                name: 'Roommates & Paying Guests',
                image: './images/guest.svg',
                link:'/rent/roommates'
            },
            {
                name: 'Vacation Rentals - Guest Houses',
                image: './images/vacation.svg',
                link:'/rent/vacation'
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

export default Rent;
