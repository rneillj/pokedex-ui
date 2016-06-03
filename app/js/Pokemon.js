import React from "react";

class Pokemon extends React.Component {
  render() {
    const pokemon = this.props.pokemon;

    const css = {
      liStyle: {
        "display": "inline-block"
      },
      spanStyle: {
        "display": "block",
        "textAlign": "center"
      }
    };

    return(
      <div>
        <ul>
          {
            pokemon.map(function(p){
              let imgSrc = `./img/${p.number}.png`;
              return (
                <li key={p.number} style={css.liStyle}>
                  <img src={imgSrc} />
                  <span style={css.spanStyle}>{p.name}</span>
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
