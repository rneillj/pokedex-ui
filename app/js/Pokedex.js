import React from "react";
import { Link } from "react-router";

class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <Link to="/pokemon">pokemon</Link>
      </div>
    );
  }
}

export default Pokedex;
