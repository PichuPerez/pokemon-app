import React, {Component} from 'react'
import Pokecard from "./Pokecard"
import '../styles/pokeDeck.css'

function Pokedeck (props) {
        let pokecards = props.pokemons.map(pokemon =>
            <Pokecard key={pokemon.id} pokemon={pokemon}/>)
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div>
                        <img className="mt-3 img-fluid max-width: 80%" src={process.env.PUBLIC_URL + '/images/pokemon-logo.png'} width="600" height="300"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="Pokedeck">
                        {pokecards}
                    </div>
                </div>

            </div>
        )
}

export default Pokedeck
