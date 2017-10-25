import { VALUE } from "./../actions/constants";

const addTodo = (state = [], action) => {
  switch (action.type) {
    case VALUE:
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default addTodo;
