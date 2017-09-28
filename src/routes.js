import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.components';
import Countries from './presentational/countries.components';
import Continents from './presentational/continents.components'
import Contact from './presentational/contact.components';
import NotFound from './presentational/not-found.components';


export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='countries' component={Countries}/>
        <Route path='continents' component={Continents}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);