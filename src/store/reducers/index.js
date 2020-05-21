// store 역할?
// 모든 reducer에 action creator를 뿌리기 위해 합치는 곳
// action.type이 맞으면 처리 아니면 버림

import { combineReducers } from "redux";
import goRegister from "./goRegister";
import login from "./login";
import currentAuthStatus from "./currentAuthStatus";
import authPhone from "./authPhone";
import authAccount from "./authAccount";
import nextAuthStatus from "./nextAuthStatus";
import detectAsset from "./detectAsset";

const rootReducer = combineReducers({
  goRegister,
  login,
  currentAuthStatus,
  authPhone,
  authAccount,
  nextAuthStatus,
  detectAsset,
});

export default rootReducer;
