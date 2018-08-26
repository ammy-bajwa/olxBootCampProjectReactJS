import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import Property from '../components/Property';
import Rent from '../components/Rent';
import Vehicles from '../components/Vehicles';
import Bikes from '../components/Bikes';
import Electronics from '../components/Electronics';
import Mobiles from '../components/Mobiles';
import Jobs from '../components/Jobs';
import Services from '../components/Services';
import Buisiness from '../components/Buisiness';
import Furniture from '../components/Furniture';
import Animals from '../components/Animals';
import Books from '../components/Books';
import Fashion from '../components/Fashion';
import Kids from '../components/Kids';
import Ads from '../components/Ads';
import Buy from '../components/Buy';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Postad from '../components/Postad';
import PrivateRoute from './PrivateRoutes';
import Search from '../components/Search';
import User from '../components/User';
import Edit from '../components/Edit';

const history = createBrowserHistory()


const AppRoute = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <PrivateRoute path='/user' component={User} exact={true} />
                <Route path='/search' component={Search} exact={true} />
                <Route path='/property' component={Property} exact={true} />
                <Route path='/rent' component={Rent} exact={true} />
                <Route path='/vehicles' component={Vehicles} exact={true} />
                <Route path='/bikes' component={Bikes} exact={true} />
                <Route path='/electronics' component={Electronics} exact={true} />
                <Route path='/mobiles' component={Mobiles} exact={true} />
                <Route path='/jobs' component={Jobs} exact={true} />
                <Route path='/services' component={Services} exact={true} />
                <Route path='/buisiness' component={Buisiness} exact={true} />
                <Route path='/furniture' component={Furniture} exact={true} />
                <Route path='/animals' component={Animals} exact={true} />
                <Route path='/books' component={Books} exact={true} />
                <Route path='/fashion' component={Fashion} exact={true} />
                <Route path='/kids' component={Kids} exact={true} />
                <Route path='/login' component={Login} exact={true} />
                <Route path='/signup' component={Signup} exact={true} />
                <PrivateRoute path='/:catogary/:subcatogary/ads/postad' component={Postad} exact={true} />
                <Route path='/:catogary/:subcatogary/ads' component={Ads} exact={true} />
                <Route path='/:catogary/:subcatogary/ads/buy' component={Buy} exact={true} />
                <PrivateRoute path='/:catogary/:subcatogary/ads/edit' component={Edit} exact={true} />
            </Switch>
        </Router>
    );
}

export default AppRoute;