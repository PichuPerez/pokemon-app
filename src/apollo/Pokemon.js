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

export default class Pokemon extends Component {
    render() {
        const { match } = this.props
        console.log(match)
        return (
            <Query query={GET_POKEMON_DETAIL} variables={{ id: match.params.id }}>
                {({loading, error, data})=> {
                    if (loading) return null
                    if (error) return `Error! ${error}`
                    console.log(data)
                    return <PokemonDetail pokemon={data.pokemon} />
                }}
            </Query>
        )
    }
}
