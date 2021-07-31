import * as actions from "./actions"

const initialState = {
  showName: true,
  name: 'Default'
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case actions.PROFILE_SHOW_NAME:
      return { ...state, showName: action.payload };
    case actions.PROFILE_SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
