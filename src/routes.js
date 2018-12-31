import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import Service from './pages/service';
import Portfolio from './pages/portfolio';
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import Dashboard from './manager/pages/dashboard';

const Routes = prost => {
    return (
        <BrowserRouter>
            <div>
                {/* Header está sendo colocado aqui pq preferir deixare as rotas em um arquivo separado */}
                <Header /> 
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/service" component={Service} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/gerenciador" component={Dashboard} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Routes;