import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/Home';
import LaunchDetails from './screens/LaunchDetails';


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

function App() {
    return ( 
        <ApolloProvider client = { client } >
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/launch/:flight_number" component={LaunchDetails} />
            </Router>
            
        </ApolloProvider>

    );
}

export default App;