import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //handleIncrement = () => {
  // dioes not work .. this.state.count++;
  //  this.setState({ count: this.state.count + 1 });
  //};
  //<span className={classes}>{this.formatCount()}</span>

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  //getBadgeClasses() {
  //  let classes = "badge m-2 badge-";
  //  classes += this.state.count === 0 ? "primary" : "warning";
  //   return classes;
  // }

  formatCount() {
    const { count } = this.state;
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
