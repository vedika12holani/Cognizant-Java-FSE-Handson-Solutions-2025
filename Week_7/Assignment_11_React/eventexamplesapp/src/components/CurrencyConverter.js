import React, { Component } from 'react';
import './CurrencyConverter.css';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { amount, currency } = this.state;
    const convertedAmount = amount * 80;
    alert(`Converting to ${currency} Amount is ${convertedAmount}`);
  }

  render() {
    return (
      <div>
        <h1 className="title">Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Currency:
            <textarea name="currency" value={this.state.currency} onChange={this.handleChange}></textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConverter;
