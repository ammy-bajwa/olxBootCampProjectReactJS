import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Books extends Component {
    state = {
        dataArray: [
            {
                name: 'Books & Magazines',
                image: './images/booksShelve.svg',
                link:'/books/magazines'
            },
            {
                name: 'Musical Instruments',
                image: './images/guitar.svg',
                link:'/books/music'
            },
            {
                name: 'Sports Equipment',
                image: './images/helmet.svg',
                link:'/books/sports'
            },
            {
                name: 'Gym & Fitness',
                image: './images/dumbbell.svg',
                link:'/books/gym'
            },
            {
                name: 'Other Hobbies',
                image: './images/kite.svg',
                link:'/books/other'
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

export default Books;
