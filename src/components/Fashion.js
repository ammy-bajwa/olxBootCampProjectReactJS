import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Fashion extends Component {
    state = {
        dataArray: [
            {
                name: 'Accessories',
                image: './images/sunGlasses.svg',
                link:'/fashion/accessories'
            },
            {
                name: 'Clothes',
                image: './images/casualShirt.svg',
                link:'/fashion/clothes'
            },
            {
                name: 'Footwear',
                image: './images/heels.svg',
                link:'/fashion/footwear'
            },
            {
                name: 'Jewellery',
                image: './images/necklace.svg',
                link:'/fashion/jewellery'
            },
            {
                name: 'Make Up',
                image: './images/makeUp.svg',
                link:'/fashion/makeup'
            },{
                name: 'Skin & Hair',
                image: './images/hairdresser.svg',
                link:'/fashion/skin'
            },
            {
                name: 'Watches',
                image: './images/wristwatch.svg',
                link:'/fashion/watches'
            },
            {
                name: 'Wedding',
                image: './images/newlyweds.svg',
                link:'/fashion/wedding'
            },
            {
                name: 'Lawn & Pret',
                image: './images/dress.svg',
                link:'/fashion/lawn'
            },
            {
                name: 'Couture',
                image: './images/dummy.svg',
                link:'/fashion/couture'
            },
            {
                name: 'Other Fashion',
                image: './images/nailPolish.svg',
                link:'/fashion/other'
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

export default Fashion;
