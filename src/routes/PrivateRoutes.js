import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// var loginStatus = false;

export const PrivateRoute = ({
    auth,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            auth === true ? (
                <div>
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to="/login" />
                )
        )} />
    );

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute);
