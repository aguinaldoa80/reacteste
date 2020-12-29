/*
 What is wrong with this code?
*/

import React, { Component } from "react";
import { DATA } from "./data";

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({ items: DATA });
  }

  render() {
    let { items } = this.state;
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

export default App;
