import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import setingReducer from '../components/setingState';
import { changeSetingEpic, searchSetingEpic } from '../components/epics';

const reducer = combineReducers({
    seting: setingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    changeSetingEpic,
    searchSetingEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;