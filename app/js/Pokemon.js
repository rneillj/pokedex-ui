import React from "react";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  getPokemonByName(name) {
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
        this.setState({ data: json })
      });
  }
  
  componentDidMount() {
    this.getPokemonByName(this.props.params.id);
  }

  render() {
    const pokemon = this.state.data;
    const imgSrc = `../img/${pokemon.number}.png`;

    return(
      <div>
        <img src={imgSrc} />
        <ul>
          <li>Name: {pokemon.name}</li>
          <li>Number: {pokemon.number}</li>
          <li>Generation: {pokemon.generation}</li>
        </ul>
      </div>
    );
  }
}

export default Pokemon;
