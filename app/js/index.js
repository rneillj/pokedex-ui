import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./Layout";
import Pokedex from "./Pokedex";
import PokemonList from "./PokemonList";
import Pokemon from "./Pokemon";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="pokemon" component={PokemonList} />
      <Route path="pokemon/:id" component={Pokemon} />
    </Route>
  </Router>,
  app
);
