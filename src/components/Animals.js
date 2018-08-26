import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Animals extends Component {
    state = {
        dataArray: [
            {
                name: 'Fish & Aquariums',
                image: './images/fish.svg',
                link:'/animals/fish'
            },
            {
                name: 'Birds',
                image: './images/bird.svg',
                link:'/animals/birds'
            },
            {
                name: 'Hens & Aseel',
                image: './images/hen.svg',
                link:'/animals/hens'
            },
            {
                name: 'Cats',
                image: './images/cat.svg',
                link:'/animals/cats'
            },
            {
                name: 'Dogs',
                image: './images/dog.svg',
                link:'/animals/dogs'
            },
            {
                name: 'Livestock',
                image: './images/cow.svg',
                link:'/animals/livestock'
            },
            {
                name: 'Horses',
                image: './images/horse.svg',
                link:'/animals/horses'
            },
            {
                name: 'Pet Food & Accessories',
                image: './images/dogFood.svg',
                link:'/animals/food'
            },
            {
                name: 'Other Animals',
                image: './images/rabbit.svg',
                link:'/animals/other'
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

export default Animals;
