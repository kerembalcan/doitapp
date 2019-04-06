/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {apolloClient} from "../graphql/index";
import AppContainer from "./navigators/index";
import withProvider from "../graphql/provider";
import {createLogger} from "redux-logger";

import loginReducer from './login/reducer'
import type {LoginState} from "./login/reducer"

const logger = createLogger({
  predicate: () => __DEV__
});

export type GlobalState = {
  loginReducer: LoginState
};
const appReducer = combineReducers({
  loginReducer
});
const rootReducer = ( state, action ) => {
  if ( action.type === "LOG_OUT" ) { //todo: use real action
    state = undefined;
  }
  return appReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

const ApolloClientProvider = withProvider(AppContainer);

class App extends React.Component<null> {
  render(){
    console.log(store);
    return <Provider store={store}>
      <ApolloClientProvider />
    </Provider>
  }
}

export default App;
