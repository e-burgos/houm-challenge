import React, { Component } from 'react';
import Router from 'next/router';

export default class Home extends Component {
    componentDidMount = () => {
        Router.push('/coins');
    };

    render() {
        return <div></div>;
    }
}
