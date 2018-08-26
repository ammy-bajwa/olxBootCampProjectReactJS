import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Mobiles extends Component {
    state = {
        dataArray: [
            {
                name: 'Mobile Phones',
                image: './images/smartphone.svg',
                link:'/mobiles/phones'
            },
            {
                name: 'Tablets',
                image: './images/tablet.svg',
                link:'/mobiles/tablets'
            },
            {
                name: 'Accessories',
                image: './images/bluetooth.svg',
                link:'/mobiles/accessories'
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

export default Mobiles;
