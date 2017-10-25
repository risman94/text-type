import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      color: "",
      size: "32px"
    };
  }

  fontsize(e) {
    this.setState({
      size: e.target.value
    });
  }

  colorred() {
    this.setState({
      color: "red"
    });
  }

  colorblue() {
    this.setState({
      color: "blue"
    });
  }

  colorgreen() {
    this.setState({
      color: "green"
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const coba = {
      color: this.state.color,
      fontSize: this.state.size
    };
    return (
      <div className="App">
        <br />
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
        <br />
        <button onClick={this.colorred.bind(this)}>red</button>
        <button onClick={this.colorblue.bind(this)}>blue</button>
        <button onClick={this.colorgreen.bind(this)}>green</button>
        <br />
        <br />
        <select onChange={this.fontsize.bind(this)} value={this.state.size}>
          <option value="32px">32px</option>
          <option value="18px">18px</option>
          <option value="64px">64px</option>
        </select>
        <hr />
        <br />
        <p style={coba}>{this.state.value}</p>
      </div>
    );
  }
}

export default App;
