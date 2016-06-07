import React from "react";
import { Link } from "react-router";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><h1>Pokedex</h1></Link>
        <Link to="/pokemon">pokemon</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
