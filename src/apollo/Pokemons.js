import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Pokedeck from '../components/Pokedeck'

const GET_ALL_POKEMONS = gql`
  query pokemons($first: Int = 12) {
    pokemons(first: $first) {
        id
        number
        name
        maxCP
        maxHP
        image
        types
  }
}`

function Pokemons () {
        return (
            <Query query={GET_ALL_POKEMONS}>
                {({loading, error, data})=> {
                    if (loading) return <h1 className="container mt-5">Loading Pokemons...</h1>
                    if (error) return `Error! ${error}`
                    return <Pokedeck pokemons={data.pokemons} />
                }}
            </Query>
        )
}

export default Pokemons
