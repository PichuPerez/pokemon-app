import React from 'react'
import Pokecard from "./Pokecard";

function PokemonDetail ({ pokemon }) {
        let types = pokemon.types.map(type =>{
            return( <strong className="mr-2">{type}</strong> )
        })
        let evolutions
        if(pokemon.evolutions){
            evolutions =  pokemon.evolutions.map(evolution => <Pokecard pokemon={evolution}/>)
        }
    return (
        <div className="container mt-5 justify-content-center">
            <div className="row mt-2">
                <div className="col-md-5">
                    <img src={pokemon.image} className="img-thumbnail"></img>
                </div>
                <div className="col-md-3">
                    <h1>{pokemon.name}</h1>
                </div>
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item">id: <strong>{pokemon.id}</strong></li>
                        <li className="list-group-item">Number: <strong>{pokemon.number}</strong></li>
                        <li className="list-group-item">MaxCP: <strong>{pokemon.maxCP}</strong></li>
                        <li className="list-group-item">MaxHP: <strong>{pokemon.maxHP}</strong></li>
                        <li className="list-group-item">Types: {types}</li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="row mt-5">
                <h3>Evolutions</h3>
            </div>
            <div className="row mt-2">
                {pokemon.evolutions ? evolutions : <p>This pokemon has no evolutions.</p>}
            </div>
        </div>
    )

}

export default PokemonDetail
