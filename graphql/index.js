/* @flow */
//apollo-client apollo-cache-inmemory apollo-link-http react-apollo graphql-tag graphql
import {ApolloClient} from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

import {HOST} from "../src/util/constants";
import {GRAPHQL_PATH} from "./utils";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: `${HOST}${GRAPHQL_PATH}`
});

export const apolloClient = new ApolloClient({
  link,
  cache
});