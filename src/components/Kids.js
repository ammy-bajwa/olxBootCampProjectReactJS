import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Kids extends Component {
    state = {
        dataArray: [
            {
                name: 'Kids Furniture',
                image: './images/crib.svg',
                link:'/kids/furniture'
            },
            {
                name: 'Toys',
                image: './images/toy.svg',
                link:'/kids/toys'
            },
            {
                name: 'Prams & Walkers',
                image: './images/walker.svg',
                link:'/kids/prams'
            },
            {
                name: 'Swings & Slides',
                image: './images/swing.svg',
                link:'/kids/swings'
            },
            {
                name: 'Kids Bikes',
                image: './images/Kidbicycle.svg',
                link:'/kids/bikes'
            },
            {
                name: 'Kids Accessories',
                image: './images/backpack.svg',
                link:'/kids/accessories'
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

export default Kids;
