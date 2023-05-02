import { types } from "./types";

const initialState = {
  count: 0,
};


export const countReducer = (state = initialState, action) =>
{
  console.log('state: ', state.count);
  if ((action.type === types.INCREMENT)) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if ((action.type === types.DECREMENT)) {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};


