import React from "react";

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.pokemon;

    return(
      <div>
        <ul>
          {
            pokemon.map(function(p){
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

export default Pokemon
