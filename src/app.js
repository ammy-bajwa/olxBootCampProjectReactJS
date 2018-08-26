import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss';
import './styles/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/store';

const AppChild = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<AppChild />, document.getElementById('app'));
