import React from "react";
import { connect } from "react-redux";

import { addAction, colorAction } from "./../actions/todoAction";
import "./Text.css";

class Text extends React.Component {
  render() {
    console.log(this.props.bg);
    return (
      <div className="col-md-10" style={{ background: this.props.bg }}>
        <h1 className="text-center text">{this.props.todo.text}</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Text);
