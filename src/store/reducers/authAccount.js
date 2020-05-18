import * as types from "../actions/actionTypes";

const InitialState = {
  name: "-",
  bank: "-",
  account: "-",
};

const authAccount = (state = InitialState, action) => {
  switch (action.type) {
    case types.AUTH_USER_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case types.AUTH_USER_BANK:
      return {
        ...state,
        bank: action.payload.bank,
      };
    case types.AUTH_USER_ACCOUNT:
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default authAccount;
