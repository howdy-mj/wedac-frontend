// action creator, type과 payload를 가짐
import * as types from "./actionTypes";

export const goRegisterEmail = (email) => {
  return {
    type: types.CHECK_EMAIL,
    payload: {
      email,
    },
  };
};

export const goRegisterPassword = (password) => {
  return {
    type: types.CHECK_PASSWORD,
    payload: {
      password,
    },
  };
};

export const goRegisterPwDoubleCheck = (pwDoubleCheck) => {
  return {
    type: types.CHECK_DOUBLE_PASSWORD,
    payload: {
      pwDoubleCheck,
    },
  };
};

export const loginEmail = (email) => {
  return {
    type: types.LOGIN_EMAIL,
    payload: {
      email,
    },
  };
};

export const loginPassword = (password) => {
  return {
    type: types.LOGIN_PASSWORD,
    payload: {
      password,
    },
  };
};
