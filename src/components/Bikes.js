import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Bikes extends Component {
    state = {
        dataArray: [
            {
                name: 'Motorcycles',
                image: './images/bike.png',
                link:'/bikes/motorcycle'
            },
            {
                name: 'Spare Parts',
                image: './images/sparepart.svg',
                link:'/bikes/parts'
            },
            {
                name: 'Bicycles',
                image: './images/bicycle.svg',
                link:'/bikes/bicycle'
            },
            {
                name: 'Scooters',
                image: './images/scoter.svg',
                link:'/bikes/scooters'
            },
            {
                name: 'ATV & Quads',
                image: './images/quad.svg',
                link:'/bikes/atv'
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

export default Bikes;
