import React from 'react'
import Navbar from "./components/Navbar"
import { ApolloProvider } from "react-apollo"
import client from './apollo/client'
import Routes from "./routes"


function App () {
        return (
            <ApolloProvider client={client}>
                <div className="App">
                    <Navbar/>
                    <Routes/>
                </div>
            </ApolloProvider>
        )
}

export default App;
