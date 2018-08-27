import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Vehicles extends Component {
    state = {
        dataArray: [
            {
                name: 'Cars',
                image: './images/car.svg',
                link:'/vehicles/cars'
            },
            {
                name: 'Buses, Vans & Trucks',
                image: './images/van.svg',
                link:'/vehicles/buses'
            },
            {
                name: 'Rickshaw & Chingchi',
                image: './images/rickshaw.svg',
                link:'/vehicles/rickshaw'
            },
            {
                name: 'Cars Accessories',
                image: './images/caracessory.svg',
                link:'/vehicles/assessories'
            },
            {
                name: 'Spare Parts',
                image: './images/sparepart.svg',
                link:'/vehicles/parts'
            },
            {
                name: 'Boats',
                image: './images/boat.svg',
                link:'/vehicles/boats'
            },
            {
                name: 'Tractors & Trailers',
                image: './images/tractor.svg',
                link:'/vehicles/tractors'
            },
            {
                name: 'Other Vehicles',
                image: './images/otherVehicle.svg',
                link:'/vehicles/other'
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

export default Vehicles;
