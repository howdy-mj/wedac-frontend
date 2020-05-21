import * as types from "../actions/actionTypes";

const InitialState = {
  phoneNum: "-",
};

const authPhone = (state = InitialState, action) => {
  switch (action.type) {
    case types.AUTH_PHONE:
      return {
        ...state,
        phoneNum: action.payload.phoneNum,
      };
    default:
      return state;
  }
};

export default authPhone;
