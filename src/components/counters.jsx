import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 7 },
      { id: 4, value: 5 }
    ]
  };
  handleIncrement = counter => {
    const counters = this.state.counters.map(c => {
      if (c.id === counter.id) {
        c.value++;
      }
      return c;
    });
    this.setState({
      counters
    });
  };
  handleDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({
      counters
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
