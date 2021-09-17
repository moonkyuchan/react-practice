const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [...state, action.payload];
    case "DELETE_LIST":
      return [...action.payload];
    default:
      return state;
  }
};

export default todoReducer;

const INITIAL_STATE = [
  { id: 1, text: "자바스크립트", done: true },
  { id: 2, text: "리액트", done: true },
  { id: 3, text: "리덕스", done: false },
];
