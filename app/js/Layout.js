import React from "react";
import Pokemon from "./Pokemon"

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokemon />
      </div>
    );
  }
}

export default Layout;
