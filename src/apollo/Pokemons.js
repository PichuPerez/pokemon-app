import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Pokedeck from '../components/Pokedeck'

const GET_ALL_POKEMONS = gql`
  query pokemons($first: Int = 10) {
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

export default class Pokemons extends Component {
    render() {
        return (
            <Query query={GET_ALL_POKEMONS}>
                {({loading, error, data})=> {
                    if (loading) return null
                    if (error) return `Error! ${error}`
                    console.log(data)
                    return <Pokedeck pokemons={data.pokemons} />
                }}
            </Query>
        )
    }
}
