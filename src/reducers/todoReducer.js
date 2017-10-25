import { VALUE, COLOR } from "./../actions/constants";

const initialState = {
  text: "",
  warna: ["red", "blue", "yellow", "grey", "green", "white", "pink"]
};

const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case VALUE:
      return {
        ...state,
        text: action.text
      };
    case COLOR:
      return [...state, { warna: action.warna }];
    default:
      return state;
  }
};

export default addTodo;
