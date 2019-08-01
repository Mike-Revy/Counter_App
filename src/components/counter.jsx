import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call get new data from server
    }
  }
  componentWillUnmount() {
    console.log(" Counter - Unmount ");
    // clean up listener or such
    // otherwise get memory leaks
  }
  // state = {
  // count: 0
  // value: this.props.counter.value
  // tags: []
  // "tag1", "tag2", "tag3"
  // imageUrl: "https://picsum.photos/200"
  // use below in fragment <img src={this.state.imageUrl} alt="" />
  // };
  product = {
    id: 1
  };

  //styles = {
  //  fontSize: 10,
  ///  fontWeight: "bold"
  //};  Then inside fragment ...
  // <span style={this.styles} className="badge badge-primary m-2"></span>
  // or <span style={{fontSize:10}} className="badge badge-primary m-2"></span>
  //<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
  //<button className="btn btn-secondary btn-sm">Increment</button>
  // below ul was in fragment .. but moved to renderTags
  // <React.Fragment />;
  //<ul>
  //{this.state.tags.map(tag => (
  //  <li key={tag}>{tag}</li>
  //))}
  //</ul>

  //constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  //  console.log("Constructor", this);
  //}

  //handleIncrement() {
  //  console.log("Increment Clicked");
  //  console.log("Constructor", this);
  //}
  // - below lets us bind handler to this object without using super as above
  //
  // <h4>Counter #{this.props.id}</h4> - t odisplay title
  // handleIncrement = () => {
  //handleIncrement = product => {
  //  console.log("Increment Clicked");
  //  console.log(product);
  // this.props.value = 0; - props values are read only - diff between state and prop
  //  this.setState({ value: this.state.value + 1 });
  //  console.log("Constructor", this);
  //};

  render() {
    // console.log(this.props);
    console.log("counter rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={this.handleIncrement}
          // onClick={() => this.handleIncrement({ id: 2 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += this.state.value === 0 ? "warning" : "primary";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value: count } = this.state;
    const { value: count } = this.props.counter;
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
