import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Electronics extends Component {
    state = {
        dataArray: [
            {
                name: 'Cameras & Accessories',
                image: './images/camera.svg',
                link:'/electronics/camera'
            },
            {
                name: 'Computers & Accessories',
                image: './images/desktop.svg',
                link:'/electronics/computer'
            },
            {
                name: 'Games & Entertainment',
                image: './images/game-controller.svg',
                link:'/electronics/games'
            },
            {
                name: 'Generators, UPS & Power Solutions',
                image: './images/generator.svg',
                link:'/electronics/generators'
            },
            {
                name: 'Kitchen Appliances',
                image: './images/microwave.svg',
                link:'/electronics/kitchen'
            },
            {
                name: 'TV - Video - Audio',
                image: './images/television.svg',
                link:'/electronics/tv'
            },
            {
                name: 'AC & Coolers',
                image: './images/cooler.svg',
                link:'/electronics/ac'
            },
            {
                name: 'Fridges & Freezers',
                image: './images/fridge.svg',
                link:'/electronics/fridge'
            },
            {
                name: 'Washing Machines & Dryers',
                image: './images/laundry.svg',
                link:'/electronics/washing'
            },
            {
                name: 'Other Home Appliances',
                image: './images/iron.svg',
                link:'/electronics/appliances'
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

export default Electronics;
