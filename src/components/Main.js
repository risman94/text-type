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
      bg: ""
    };
  }

  styleColor(node) {
    this.setState({
      bg: node
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
          <p>
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
              onClick={this.styleColor.bind(this, node)}
            />
          ))}
        </div>
        <Text bg={this.state.bg} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Main);
