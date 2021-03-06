import React from "react";
import { connect } from "react-redux";

import { addAction } from "./../actions/todoAction";
import "./Main.css";
import Text from "./Text";

let timeoutId;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: "",
      color: "",
      size: "",
      bold: "",
      font: ""
    };
  }

  styleFont(e) {
    this.setState({ font: e.target.value });
  }

  styleBold(e) {
    this.setState({ bold: e.target.value });
  }

  styleSize(e) {
    this.setState({
      size: e.target.value
    });
  }

  styleBg(node) {
    this.setState({
      bg: node
    });
  }

  styleColor(node) {
    this.setState({
      color: node
    });
  }

  handleChange() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(
      () => this.props.dispatch(addAction(this._text.value)),
      1000
    );
  }
  render() {
    console.log(this.props.todo);
    return (
      <div className="row col-md-12">
        <div className="col-md-2 main-div">
          <br />
          <input
            type="text"
            className="form-control"
            ref={input => (this._text = input)}
            onChange={this.handleChange.bind(this)}
            placeholder="insert text..."
          />
          <br />
          <p style={{ marginBottom: 0, float: "left", paddingRight: "5px" }}>
            <label>size</label>
          </p>
          <select onChange={this.styleSize.bind(this)}>
            {this.props.todo.size.map((node, index) => (
              <option key={index} value={node}>
                {node}
              </option>
            ))}
          </select>
          <div style={{ float: "right" }}>
            <label style={{ paddingRight: "5px" }}>Bold</label>
            <select onChange={this.styleBold.bind(this)}>
              {this.props.todo.bold.map((node, index) => (
                <option key={index} value={node}>
                  {node}
                </option>
              ))}
            </select>
          </div>
          <div style={{ float: "left" }}>
            <label style={{ paddingRight: "5px" }}>font</label>
            <select onChange={this.styleFont.bind(this)}>
              {this.props.todo.font.map((node, index) => (
                <option key={index} value={node}>
                  {node}
                </option>
              ))}
            </select>
          </div>
          <br />
          <p style={{ marginTop: 30, marginBottom: 0 }}>
            <label>Background</label>
          </p>
          {this.props.todo.warna.map((node, key) => (
            <div
              key={key}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: node,
                float: "left",
                margin: "2px"
              }}
              onClick={this.styleBg.bind(this, node)}
            />
          ))}
          <p style={{ marginTop: "150px", marginBottom: 0 }}>
            <label>Color</label>
          </p>
          {this.props.todo.warna.map((node, key) => (
            <div
              key={key}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: node,
                float: "left",
                margin: "2px"
              }}
              onClick={this.styleColor.bind(this, node)}
            />
          ))}
        </div>
        <Text
          color={this.state.color}
          size={this.state.size}
          bg={this.state.bg}
          bold={this.state.bold}
          font={this.state.font}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Main);
