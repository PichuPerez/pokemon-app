import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../styles/pokeCard.css'

const Pokecard = ({ pokemon }) =>{
        let types = pokemon.types.map(type =>{
               return( <strong className="mr-2">{type}</strong> )
        })
        return (
            <div className="pokeCard container mt-5">
                <div className="row justify-content-center">
                    <h4 className="card-title">-- {pokemon.name} --</h4>
                </div>
                <div>
                    <img src={pokemon.image} className="img-thumbnail no-border"></img>
                </div>
                <div className="mt-3 ml-3">
                    <p> id: <strong>{pokemon.id}</strong></p>
                    <p> Number: <strong>{pokemon.number}</strong></p>
                    <p> MaxCP: <strong>{pokemon.maxCP}</strong></p>
                    <p> MaxHP: <strong>{pokemon.maxHP}</strong></p>
                    <p> Types: {types}</p>
                </div>
            <Link to={`/${pokemon.id}`}>
                    <button className="btn btn-primary mt-5 align-bottom">More Info</button>
            </Link>
            </div>

        )

}

export default Pokecard
