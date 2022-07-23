import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    count: 0,
  };

  handleClickIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClickDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickDecrement} className="btn btn-info">
          Decrement
        </button>
        <span className={this.getBadgeClass()}> {this.formatNumber()} </span>
        <button onClick={this.handleClickIncrement} className="btn btn-primary">
          Increment
        </button>
      </div>
    );
  }

  getBadgeClass = () => {
    let className = "badge m-2 bg-";
    className += this.state.count === 0 ? "warning" : "danger";
    return className;
  };

  formatNumber = () => {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  };
}

export default App;
