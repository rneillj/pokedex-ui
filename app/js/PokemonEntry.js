import React from "react";

class PokemonEntry extends React.Component {
  getPokemon(name) {
    const url = `http://localhost:8000/pokemon/${name}`;
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
        this.setState( { entry: json.pokemon })
      });
  }

  componentWillMount() {
    this.getPokemon(this.props.name)
  }

  render() {
    return (
      <span>{this.state.entry}</span>
    );
  }
}

export default PokemonEntry;
