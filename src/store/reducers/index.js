// store 역할?
// 모든 reducer에 action creator를 뿌리기 위해 합치는 곳
// action.type이 맞으면 처리 아니면 버림

import { combineReducers } from "redux";
import goRegister from "./goRegister";
import login from "./login";

const rootReducer = combineReducers({
  goRegister,
  login,
});

export default rootReducer;
