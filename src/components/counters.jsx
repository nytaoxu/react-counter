import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      counters,
      onReset,
      onIncrement,
      onDecrement,
      onDelete
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <div className="container">
          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
