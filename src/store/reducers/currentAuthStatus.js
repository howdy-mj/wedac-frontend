import * as types from "../actions/actionTypes";

const initialState = {
  level: 1,
};

const currentAuthStatus = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LEVEL:
      return {
        ...state,
        level: action.payload.level,
      };
    case types.AUTH_GRADE:
      return {
        ...state,
        grade: action.payload.grade,
      };
    default:
      return state;
  }
};

export default currentAuthStatus;
