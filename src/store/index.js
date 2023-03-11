import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

// next === dispatch


const store = createStore(
                        combineReducers({heroes, filters}),
                        compose(applyMiddleware(ReduxThunk, stringMiddleWare),
                                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
                        );

export default store;
