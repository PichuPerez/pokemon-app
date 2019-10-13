import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../styles/pokeCard.css'

function Pokecard ({ pokemon }){
        let textColor = function(type){
            switch(type){
                case 'Poison': return 'ml-2 text-info'
                break
                case 'Fire': return 'ml-2 text-danger'
                break
                case 'Grass': return 'ml-2 text-success'
                break
                case 'Bug': return 'ml-2 text-success'
                break
                case 'Water': return 'ml-2 text-primary'
                break
                case 'Flying': return 'ml-2 text-warning'
            }
        }
        let types = pokemon.types.map(type =>{
               return( <strong className={textColor(type)}>{type}</strong> )
        })
        return (
            <div className="pokeCard container mt-5">
                <div className="row justify-content-center">
                    <h4 className="card-title">-- {pokemon.name} --</h4>
                </div>
                <div className="img-container">
                    <img src={pokemon.image} className="img-thumbnail no-border"></img>
                </div>
                <div className="mt-3 ml-3">
                    <p> id: <strong>{pokemon.id}</strong></p>
                    <p> Number: <strong>{pokemon.number}</strong></p>
                    <p> MaxCP: <strong>{pokemon.maxCP}</strong></p>
                    <p> MaxHP: <strong>{pokemon.maxHP}</strong></p>
                    <p> Types: {types}</p>
                </div>
                <div className="container">
                    <Link to={`/${pokemon.id}`}>
                        <button className="btn btn-primary mt-5">More Info</button>
                    </Link>
                </div>
            </div>
        )
}

export default Pokecard
