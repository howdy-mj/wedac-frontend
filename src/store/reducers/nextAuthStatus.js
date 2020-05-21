import * as types from "../actions/actionTypes";

const initialState = {
  nextLevel: 2,
  nextGrade: "휴대전화번호 인증",
  description: "코인 입금을 위해 휴대전화 인증을 진행해주시기 바랍니다.",
  link: "/settings/vertification/authPhone",
};

const nextAuthStatus = (state = initialState, action) => {
  switch (action.type) {
    case types.NEXT_AUTH:
      return {
        ...state,
        nextGrade: action.payload.nextGrade,
        nextLevel: action.payload.nextLevel,
        description: action.payload.description,
        link: action.payload.link,
      };
    default:
      return state;
  }
};

export default nextAuthStatus;
