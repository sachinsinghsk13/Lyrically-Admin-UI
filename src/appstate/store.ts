import { createStore } from 'redux';
import appReducer from './app-reducer';

const store = createStore(appReducer, undefined, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

export default store;