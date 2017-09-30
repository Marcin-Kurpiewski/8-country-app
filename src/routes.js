import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.components';
import Countries from './presentational/countries.components';
import Continents from './presentational/continents.components'
import Contact from './presentational/contact.components';
import NotFound from './presentational/not-found.components';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-detail-container.component';
import ContinentsContainer from './containers/continents-container.component';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
            <Route path='countries'>
                <IndexRoute component={CountryFlagContainer}/>
                <Route path='country/:id' component={CountryDetailsContainer}/>
            </Route>
        <Route path='continents' component={ContinentsContainer}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);