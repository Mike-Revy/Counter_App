import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
    // "tag1", "tag2", "tag3"
    // imageUrl: "https://picsum.photos/200"
    // use below in fragment <img src={this.state.imageUrl} alt="" />
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

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }

  //getBadgeClasses() {
  //  let classes = "badge m-2 badge-";
  //  classes += this.state.count === 0 ? "warning" : "primary";
  //   return classes;
  // }

  // formatCount() {
  //   const { count } = this.state;
  //   // return this.state.count === 0 ? 'Zero' : this.state.count;
  //   return count === 0 ? "Zero" : count;
  // }
}

export default Counter;
