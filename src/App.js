import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
// import { isMainThread } from "worker_threads";

class App extends Component {
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
      <React.Fragment>
        <Navbar total={this.calculateTotal()} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
  calculateTotal() {
    let total = 0;
    this.state.counters.forEach(counter => (total += counter.value));
    return total;
  }
}

export default App;
