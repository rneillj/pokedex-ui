import React from "react";
import PokemonEntry from "./PokemonEntry";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: [] };
  }

  getPokemon() {
    const url = 'http://localhost:8000/pokemon/bulbasaur';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    const options = {
      method: 'GET',
      headers: headers,
      mode: 'cors'
    };
    fetch(url, options)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({pokemon: json})
      });
  }

  componentWillMount() {
    this.getPokemon();
  }

  render() {
    return(
      <div>
        <PokemonEntry pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default Pokemon;
