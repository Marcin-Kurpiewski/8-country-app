import { createStore } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';
import { getCountries } from '../actions/actions-countries';

const store = createStore(
    reducers,
    DevTools.instrument()
);

console.log(store.getState()); // nasłuchiwanie na zmiany

store.dispatch(getCountries()); // wywołanie dispatch nie wprowadza zadnych zmian hm...

export default store;