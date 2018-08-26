import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Jobs extends Component {
    state = {
        dataArray: [
            {
                name: 'Online',
                image: './images/onlineJob.svg',
                link:'/jobs/online'
            },
            {
                name: 'Marketing',
                image: './images/marketing.svg',
                link:'/jobs/marketing'
            },
            {
                name: 'Advertising & PR',
                image: './images/promotion.svg',
                link:'/jobs/advertising'
            },
            {
                name: 'Education',
                image: './images/lecture.svg',
                link:'/jobs/education'
            },
            {
                name: 'Customer Service',
                image: './images/customer-service.svg',
                link:'/jobs/service'
            },
            {
                name: 'Sales',
                image: './images/salesman.svg',
                link:'/jobs/sales'
            },
            {
                name: 'IT & Networking',
                image: './images/programmer.svg',
                link:'/jobs/it'
            },
            {
                name: 'Hotels & Tourism',
                image: './images/tourism.svg',
                link:'/jobs/hotels'
            },
            {
                name: 'Clerical & Administration',
                image: './images/manager.svg',
                link:'/jobs/clerical'
            },
            {
                name: 'Human Resources',
                image: './images/meeting.svg',
                link:'/jobs/human'
            },
            {
                name: 'Accounting & Finance',
                image: './images/accounting.svg',
                link:'/jobs/accounting'
            },
            {
                name: 'Manufacturing',
                image: './images/manufacturing.svg',
                link:'/jobs/manufacturing'
            },
            {
                name: 'Medical',
                image: './images/hospital.svg',
                link:'/jobs/medical'
            },
            {
                name: 'Domestic Staff',
                image: './images/cooker.svg',
                link:'/jobs/domestic'
            },
            {
                name: 'Part - Time',
                image: './images/hourglass.svg',
                link:'/jobs/parttime'
            },
            {
                name: 'Other Jobs',
                image: './images/jobSearch.svg',
                link:'/jobs/other'
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

export default Jobs;
