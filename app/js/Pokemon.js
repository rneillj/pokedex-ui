import React from "react";
import { getPokemonByName } from "./api";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  
  componentDidMount() {
    getPokemonByName(this.props.params.id).then((pokemon) => {
      this.setState({ data: pokemon });
    });
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
