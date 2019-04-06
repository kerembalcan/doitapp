/* @flow */
import React from "react";
import {ApolloProvider} from "react-apollo";
import {apolloClient} from "./index";

export default function withProvider(WrappedComponent) {
  return class Cp extends React.Component {
    render() {
      return <ApolloProvider client={apolloClient}>
        <WrappedComponent {...this.props} />
      </ApolloProvider>
    }
  }
}