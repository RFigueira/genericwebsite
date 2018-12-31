import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


import Header from '../../components/header';
import Portfolio from '../portfolio';
import Preco from '../preco';
import { auth } from './../../../firebase-config';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogado: false,
            isLogando: true,
            user: null
        }
    }
    
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                isLogando: false,
                isLogado: !!user,
                user
            })
        })
    }

    render() {
        if(this.state.isLogando) {
            return <p>Aguarde...</p>
        }
        if(!this.state.isLogado) {
            return <Redirect to='/login' />
        }
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
