import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import PokemonDetail from '../components/PokemonDetail'

const GET_POKEMON_DETAIL = gql`
  query pokemon($id: String!) {
  pokemon(id: $id) {
        id
        number
        name
        maxCP
        maxHP
        image
        types
        evolutions {
          id
          number
          name
          maxCP
          maxHP
          image
          types
        }
  }
}`

class Pokemon extends Component {
    render() {
        const {match} = this.props
        return (
            <Query query={GET_POKEMON_DETAIL} variables={{id: match.params.id}}>
                {({loading, error, data}) => {
                    if (loading) return <h1 className="container mt-5">Loading Pokemon...</h1>
                    if (error) return `Error! ${error}`
                    return <PokemonDetail pokemon={data.pokemon}/>
                }}
            </Query>
        )
    }
}

export default Pokemon
