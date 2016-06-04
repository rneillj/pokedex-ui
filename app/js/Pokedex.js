import React from "react";
import { Link } from "react-router";
// import PokemonList from "./PokemonList";
// import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <Link to="/pokemon">pokemon</Link>
      </div>
    );
  }
}

export default Pokedex;
