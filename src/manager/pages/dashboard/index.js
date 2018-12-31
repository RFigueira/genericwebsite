import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import Header from '../../components/header';
import Portfolio from '../portfolio';
import Preco from '../preco';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Painel Administrativo:</h2>
                <Route path={`/`} component={Header} />
                <Route path={`${this.props.match.url}/portfolio`} component={Portfolio} />
                <Route path={`${this.props.match.url}/preco`} component={Preco} />
            </div>
        )
    }
}

export default Dashboard;
