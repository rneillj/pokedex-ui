import React from "react";
import { Link } from "react-router";

class Layout extends React.Component {
  render() {
    const css = {
      containerStyle: {
        "boxSizing": "border-box",
        "margin": "0px 400px 0px 400px",
        "width": "1000px"
      }
    };

    return (
      <div>
        <div>
          <Link to="/"><h1>Pokedex</h1></Link>
        </div>
        <div>
          <Link to="/pokemon">pokemon</Link>
        </div>
        <div style={css.containerStyle}>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
