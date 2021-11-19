import React from "react";

export default class ClickityClick extends React.Component {

  state = {
    hasBeenClicked: false,
  }

  // handleClick = () => {
  //   this.setState({hasBeenClicked: true})
  // }
  handleClick = () => {
    this.setState((x) => { console.log(x); return {hasBeenClicked: !x.toggled} } );
  };


  render() {
   return <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
  }
}