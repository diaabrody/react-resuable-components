import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/Counters";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Nav amount={this.state.counters.filter((c) => c.value !== 0).length} />
        <main className="container">
          <button className="btn btn-success" onClick={this.handeReset}>
            reset
          </button>
          <Counters
            counters={this.state.counters}
            onHandleIncrement={this.handleIncrement}
            onHandleDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handeReset = () => {
    this.setState({
      counters: this.state.counters.map((c) => {
        c.value = 0;
        return c;
      }),
    });
  };

  handleIncrement = (counter) => {
    const newCounter = { ...counter };
    newCounter.value++;
    const counters = [...this.state.counters];
    const index = counters.findIndex((i) => i.id == counter.id);
    counters[index] = newCounter;
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };
}

export default App;
