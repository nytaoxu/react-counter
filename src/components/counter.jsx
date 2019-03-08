import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   let {
  //     counter: { id, value }
  //   } = props;
  //   console.log(id, value);
  //   this.state = {
  //     id,
  //     value
  //   };
  // }
  // handleIncrement = e => {
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
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
    let classes = "badge m-2 ";
    if (this.props.counter.value === 0) {
      classes += "badge-warning";
    } else {
      classes += "badge-primary";
    }
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
