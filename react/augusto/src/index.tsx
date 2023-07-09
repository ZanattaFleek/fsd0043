import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { ENDPOINT_GRAPHQL } from './ImportBackend/Config/emDesenvolvimento';

import { setContext } from '@apollo/client/link/context';

/*
const getToken = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : '';
};

const client = new ApolloClient({
  uri: `${graphQLServerURL}/graphql`,
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: getToken(),
      },
    });
  },
});
*/

const httpLink = createHttpLink( {
  uri: ENDPOINT_GRAPHQL,
} );

const getToken = () => {
  const token = localStorage.getItem( 'token' );
  return token
}

const authLink = setContext( ( _, { headers } ) => {
  // get the authentication token from local storage if it exists

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: getToken() ? `Bearer ${getToken()}` : "",
    }
  }
} );

const client = new ApolloClient( {
  link: authLink.concat( httpLink ),
  cache: new InMemoryCache({addTypename: false, }),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    },
    mutate: {
      fetchPolicy: 'no-cache'
    }
  }
} );

/*
const client = new ApolloClient( {
  uri: ENDPOINT_GRAPHQL,
  cache: new InMemoryCache(),
} );
*/

const root = ReactDOM.createRoot(
  document.getElementById( 'root' ) as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
