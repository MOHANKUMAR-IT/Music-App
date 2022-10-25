import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css'
import {loginUrl} from './music';

class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='login'>
                <img src="logo.png" alt="logo"/>
                {/* Spotify Logo */}
                {/* Login with spotify button */}
                <a href={loginUrl}>Let's Sing</a>
            </div>
        );
    }
}

Login.propTypes = {

};

export default Login;