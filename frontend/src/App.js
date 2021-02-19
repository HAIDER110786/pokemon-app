import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Pokemon_list from './components/pokemon_list';
import Individual_pokemon from './components/individual_pokemon';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Pokemon_list}/>
        <Route exact path='/pokemon/:pokemonId' component={Individual_pokemon}/>
      </Switch>
    </div>
  );
}

export default App;
