import * as actions from "./actions"

const initialState = {}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {

    case actions.PROFILE_INIT:
      return action.payload;

    default:
      return state;
  }
}
