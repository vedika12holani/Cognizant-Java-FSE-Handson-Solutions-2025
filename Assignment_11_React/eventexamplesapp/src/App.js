import React, { Component } from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      alert("Hello! Member1");
    });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayWelcome = (message) => {
    alert(message);
  }

  handleClick = () => {
    alert("I was clicked");
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
        <button onClick={this.handleClick}>Click on me</button>
        <CurrencyConverter />
      </div>
    );
  }
}

export default App;
