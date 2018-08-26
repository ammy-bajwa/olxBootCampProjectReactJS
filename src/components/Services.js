import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Services extends Component {
    state = {
        dataArray: [
            {
                name: 'Drivers & Taxi',
                image: './images/taxi.svg',
                link:'/services/drivers'
            },
            {
                name: 'Education & Classes',
                image: './images/class.svg',
                link:'/services/education'
            },
            {
                name: 'Electronics & Computer Repair',
                image: './images/pcRepair.svg',
                link:'/services/electronics'

            },
            {
                name: 'Event Services',
                image: './images/guestStar.svg',
                link:'/services/event'
            },
            {
                name: 'Health & Beauty',
                image: './images/toothbrush.svg',
                link:'/services/health'
            },
            {
                name: 'Maids & Domestic Help',
                image: './images/maid.svg',
                link:'/services/maids'
            },
            {
                name: 'Movers & Packers',
                image: './images/deliveryTruck.svg',
                link:'/services/movers'
            },
            {
                name: 'Other Services',
                image: './images/support.svg',
                link:'/services/other'
            },
            {
                name: 'Travel & Visa',
                image: './images/passport.svg',
                link:'/services/travel'
            },
            {
                name: 'Web Development',
                image: './images/world-wide-web.svg',
                link:'/services/developmnt'
            },
            {
                name: 'Home & Office Repair',
                image: './images/tools.svg',
                link:'/services/home'
            },
            {
                name: 'Catering & Restaurant',
                image: './images/catering.svg',
                link:'/services/catering'
            },
            {
                name: 'Farm & Fresh Food',
                image: './images/fruits.svg',
                link:'/services/farm'
            },
            {
                name: 'Car Rental',
                image: './images/carKey.svg',
                link:'/services/car'
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

export default Services;
