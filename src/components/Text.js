import React from "react";
import { connect } from "react-redux";

import { addAction, colorAction } from "./../actions/todoAction";
import "./Text.css";

class Text extends React.Component {
  render() {
    console.log(this.props.bg);
    return (
      <div
        className="col-md-10"
        style={{ background: this.props.bg, height: "100%" }}
      >
        <div
          className="text-center text"
          style={{ color: this.props.color, fontSize: this.props.size }}
        >
          {this.props.todo.text}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Text);
