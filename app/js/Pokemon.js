import React from "react";

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
      headers: headers
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
        name: {this.state.pokemon.name}
      </div>
    );
  }
}

export default Pokemon;
