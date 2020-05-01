import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from "./components/Launches/Launches";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
      <ApolloProvider client={client}>
          <div className="App">
              <div className="logo">
                  <h1>SpaceX</h1>
              </div>
              <Launches/>
          </div>
      </ApolloProvider>

  );
}

export default App;
