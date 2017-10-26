import { VALUE, COLOR, ADDSIZE } from "./../actions/constants";

const initialState = {
  text: "",
  warna: [
    "#001f3f",
    "#0074D9",
    "#7FDBFF",
    "#39CCCC",
    "#3D9970",
    "#2ECC40",
    "#01FF70",
    "#FFDC00",
    "#FF851B",
    "#FF4136",
    "#85144b",
    "#F012BE",
    "#B10DC9",
    "#111111",
    "#AAAAAA",
    "#DDDDDD"
  ],
  size: ["18", "22", "26", "40", "64", "72", "96", "144"]
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
    case ADDSIZE:
      return [...state, { size: action.size }];
    default:
      return state;
  }
};

export default addTodo;
