import React from "react";

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
        <ul>
          {
            this.state.pokemon.map(function(p){
              let imgSrc = `./img/${p.number}.png`;
              return (
              <li>
                <img src={imgSrc} />
                {p.name}
              </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default PokemonList;
