import React from 'react';
import './App.css';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

      {/* <nav>
        <NavLink className = 'search-navlink' to = {"/"} title = 'Search'>Search</NavLink>
      </nav> */}

      <Switch>
      <Route path = {"/"} exact component = {Login} />
        <Route path = {"/homepage"} exact component = {PokemonList} />
        <Route path = {"/pokemon/:pokemon"} exact component = {Pokemon} />
        <Redirect to = {"/homepage"} />
      </Switch>
    </div>
  );
}

export default App;
