import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Pokemons from '../apollo/Pokemons'
import PokemonDetail from '../apollo/Pokemon'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Pokemons} />
                <Route path="/:id" component={PokemonDetail} />
            </Switch>
        </Router>
    );
};

export default Routes
