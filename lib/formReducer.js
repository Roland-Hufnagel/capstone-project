import { nanoid } from "nanoid";

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "ADD_QUESTION":
      state.questions.push({
        id: nanoid(),
        title: "",
        type: "",
        answers: [],
      });
      return { ...state };

    case "CHANGE_QUESTION_INPUT":
      state.questions[action.payload.index].title = action.payload.value;
      return { ...state };

    case "CHANGE_SELECT":
      state.questions[action.payload.index].type = action.payload.value;
      return { ...state };

    case "DELETE_QUESTION":
      state.questions.splice(action.payload.index, 1);
      return { ...state };

    default:
      return state;
  }
};
