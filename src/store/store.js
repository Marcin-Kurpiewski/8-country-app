import { createStore } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';


const store = createStore(
    reducers,
    DevTools.instrument()
);

store.subscribe(() => console.log(store.getState())); // nasłuchiwanie na zmiany

store.dispatch(getCountries('pierwsza-zmiana')); // wywołanie dispatch nie wprowadza zadnych zmian hm...

export default store;