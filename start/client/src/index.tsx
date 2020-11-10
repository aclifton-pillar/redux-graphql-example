import {
    ApolloClient,
    NormalizedCacheObject,
    ApolloProvider
} from '@apollo/client';
import { cache } from './cache';
import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import injectStyles from './styles';

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import bookingReducers from "./components/booking-reducers";
import thunk from "redux-thunk";

// Initialize ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    uri: 'http://localhost:4000/graphql',
    headers: {
    authorization: localStorage.getItem('token') || '',
}
});

const prepareStore = () => {
    const reducers = {
        bookings: bookingReducers,
    };

    const initialState: any = {
        bookings: [],
    };

    return createStore(combineReducers(reducers), initialState, applyMiddleware(thunk));
};

const store = prepareStore();

injectStyles();

// Pass the ApolloClient instance to the ApolloProvider component
ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Pages />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);
