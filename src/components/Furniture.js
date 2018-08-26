import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Furniture extends Component {
    state = {
        dataArray: [
            {
                name: 'Sofa & Chairs',
                image: './images/sofa.svg',
                link:'/furniture/sofa'
              
            },
            {
                name: 'Beds & Wardrobes',
                image: './images/bed.svg',
                link:'/furniture/beds'
            },
            {
                name: 'Home Decor',
                image: './images/shelves.svg',
                link:'/furniture/decor'
            },
            {
                name: 'Tables & Dining',
                image: './images/dinnerTable.svg',
                link:'/furniture/tables'
            },
            {
                name: 'Garden & Outdoor',
                image: './images/outdoorFence.svg',
                link:'/furniture/garden'
            },
            {
                name: 'Painting & Mirrors',
                image: './images/drawing.svg',
                link:'/furniture/painting'
            },
            {
                name: 'Rugs & Carpets',
                image: './images/rug.svg',
                link:'/furniture/rugs'
            },
            {
                name: 'Curtains & Blinds',
                image: './images/window.svg',
                link:'/furniture/curtains'
            },
            {
                name: 'Office Furniture',
                image: './images/desk.svg',
                link:'/furniture/office'
            },
            {
                name: 'Other Household Items',
                image: './images/aquarium.svg',
                link:'/furniture/other'
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

export default Furniture;
