import React, {Component} from 'react'
import Pokecard from "./Pokecard"
import '../styles/pokeDeck.css'

class Pokedeck extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        console.log(this)
        let pokecards = this.props.pokemons.map(pokemon =>
            <Pokecard key={pokemon.id} pokemon={pokemon}/>)
        return (
            <div className="Pokedeck">
                {pokecards}
            </div>
        )
    }
}

export default Pokedeck
