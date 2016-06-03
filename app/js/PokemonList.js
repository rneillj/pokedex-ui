import React from "react";
import Pokemon from "./Pokemon";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: [] } ;
  }

  getPokemon() {
    const url = 'http://localhost:8000/pokemon';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    const options = {
      method: 'GET',
      headers: headers
    };
    fetch(url, options)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ pokemon: json.pokemon })
      });
  }

  componentWillMount() {
    this.getPokemon();
  }

  render() {
    return(
      <div>
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default PokemonList;
