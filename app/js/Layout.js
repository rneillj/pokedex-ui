import React from "react";
import Pokedex from "./Pokedex";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default Layout;
