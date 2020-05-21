import * as types from "../actions/actionTypes";

const InitialState = {
  asset: 0,
};

const detectAsset = (state = InitialState, action) => {
  switch (action.type) {
    case types.CHANGE_MYASSET:
      return {
        ...state,
        asset: action.payload.asset,
      };
    default:
      return state;
  }
};

export default detectAsset;
