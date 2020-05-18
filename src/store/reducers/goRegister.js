// signup reducer, 새로운 state return, 이전 state와 action 필요
import * as types from "../actions/actionTypes";

const initialState = {
  email: "",
  password: "",
  pwDoubleCheck: "",
};

const goRegister = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECK_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case types.CHECK_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    case types.CHECK_DOUBLE_PASSWORD:
      return {
        ...state,
        pwDoubleCheck: action.payload.pwDoubleCheck,
      };
    default:
      return state;
  }
};

export default goRegister;
