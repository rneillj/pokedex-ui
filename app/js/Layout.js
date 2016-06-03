import React from "react";
import PokemonList from "./PokemonList"

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <PokemonList />
      </div>
    );
  }
}

export default Layout;
