import React from "react";
import { connect } from "react-redux";

import { addTodoAction } from "./../actions/todoAction";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.props.dispatch(addTodoAction(this.state.value));
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div>
        <label>insert text : </label>
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        />
        <h3>{this.state.value}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

export default connect(mapStateToProps)(Main);
