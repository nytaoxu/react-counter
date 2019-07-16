import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className={this.getDecrementClasses()}
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
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

  getDecrementClasses() {
    const baseClasses = "btn btn-secondary btn-sm m-2";
    let classes = null;
    if (this.props.counter.value === 0) classes = baseClasses + " disabled";
    else classes = baseClasses;
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
