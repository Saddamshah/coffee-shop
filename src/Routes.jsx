import React from 'react'
import {BrowserRouter, Switch, Route,} from 'react-router-dom'
import Home from './core/Home';
import Contact from './core/Contact';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact-us" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;
