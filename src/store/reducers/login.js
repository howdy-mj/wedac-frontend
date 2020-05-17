// login reducer, 새로운 state return, 이전 state와 action 필요
import * as types from "../actions/actionTypes";

const initialstate = {
  email: "",
  password: "",
};

const login = (state = initialstate, action) => {
  switch (action.type) {
    case types.LOGIN_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case types.LOGIN_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default login;
