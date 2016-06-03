import React from "react";

class PokemonEntry extends React.Component {
  render() {
    return (
      <div>
        name: {this.props.pokemon.name}
      </div>
    );
  }
}

export default PokemonEntry;
