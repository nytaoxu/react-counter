import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: 0,
  //   tags: ["tag1", "tag2", "tag3"]
  // };
  constructor(props) {
    super(props);
    this.state = {
      id: props.counter.id,
      value: props.counter.value
    };
    // this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement = e => {
    this.setState({
      value: this.state.value + 1
    });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    if (this.state.value === 0) {
      classes += "badge-warning";
    } else {
      classes += "badge-primary";
    }
    return classes;
  }

  formatCount() {
    return this.state.value === 0 ? "Zero" : this.state.value;
  }
}

export default Counter;
