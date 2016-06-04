import React from "react";

class Pokemon extends React.Component {
  render() {
    return(
      <div>
        {this.props.params.id}
      </div>
    );
  }
}

export default Pokemon;
