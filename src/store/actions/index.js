// action creator, type과 payload를 가짐
import * as types from "./actionTypes";

// 회원가입
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

// 로그인
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

// 현재 인증 레벨
export const changeAuthLevel = (level) => {
  return {
    type: types.AUTH_LEVEL,
    payload: {
      level,
    },
  };
};

export const changeAuthGrade = (grade) => {
  return {
    type: types.AUTH_GRADE,
    payload: {
      grade,
    },
  };
};

// 다음 인증 레벨
export const showNextAuthLevel = (nextLevel) => {
  return {
    type: types.NEXT_AUTH_LEVEL,
    payload: {
      nextLevel,
    },
  };
};

export const showNextAuthGrade = (nextGrade) => {
  return {
    type: types.NEXT_AUTH_GRADE,
    payload: {
      nextGrade,
    },
  };
};

export const showNextAuthDescription = (description) => {
  return {
    type: types.NEXT_AUTH_DESCRIPTION,
    payload: {
      description,
    },
  };
};

// 다음 인증 레벨 한번에 보내기
export const showNextAuth = (nextLevel, nextGrade, description, link) => {
  return {
    type: types.NEXT_AUTH,
    payload: {
      nextLevel,
      nextGrade,
      description,
      link,
    },
  };
};

// 휴대폰 인증
export const submitPhoneNum = (phoneNum) => {
  return {
    type: types.AUTH_PHONE,
    payload: {
      phoneNum,
    },
  };
};

// 계좌 인증
export const submitAuthUserName = (name) => {
  return {
    type: types.AUTH_USER_NAME,
    payload: {
      name,
    },
  };
};

export const submitAuthUserBank = (bank) => {
  return {
    type: types.AUTH_USER_BANK,
    payload: {
      bank,
    },
  };
};

export const submitAuthUserAccount = (account) => {
  return {
    type: types.AUTH_USER_ACCOUNT,
    payload: {
      account,
    },
  };
};

export const submitAuthAccount = (name, bank, account) => {
  return {
    type: types.AUTH_ACCOUNT,
    payload: {
      name,
      bank,
      account,
    },
  };
};

// 입출금 확인
export const detectAsset = (asset) => {
  return {
    type: types.CHANGE_MYASSET,
    payload: {
      asset,
    },
  };
};
