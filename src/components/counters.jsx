import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // below moved to APP - lifting state up to APP
  //state = {
  //  counters: [
  //    { id: 1, value: 4 },
  //    { id: 2, value: 0 },
  //    { id: 3, value: 0 },
  //    { id: 4, value: 0 }
  //  ]
  //};

  //handleIncrement = counter => {
  //  const counters = [...this.state.counters];
  //  const index = counters.indexOf(counter);
  //  counters[index] = { ...counter };
  //  counters[index].value++;
  //  this.setState({ counters });
  //  console.log("handleIncrement", counter);
  //};

  //handleReset = () => {
  //  const counters = this.state.counters.map(c => {
  //    c.value = 0;
  //    return c;
  //  });
  //  this.setState({ counters });
  //};

  //handleDelete = counterId => {
  //  const counters = this.state.counters.filter(c => c.id !== counterId);
  //  this.setState({ counters: counters });
  //  console.log("Event Handler called ", counterId);
  //};
  // {this.state.counters.map(counter => (

  render() {
    // console.log("props", this.props);
    // const { onReset, counters, onDelete, onIncrement } = this.props
    // use above to cleanb up below code
    //
    console.log("Counters - Rendered");

    return (
      <div>
        <button
          // onClick={this.handleReset}
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            //onDelete={this.handleDelete}
            //onIncrement={this.handleIncrement}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          >
            <h4>{Counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
