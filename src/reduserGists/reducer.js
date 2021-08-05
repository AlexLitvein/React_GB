import * as actions from "./actions"

export const STATUS = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

const initialState = {
  gists: [],
  status: STATUS.IDLE,
  error: null,

};

// export const getAllGists = async (dispatch) => {
//   dispatch(actions.setGistsLoading());
//   try {
//     const res = await fetch(API_URL_PUBLIC);
//     if (!res.ok) {
//       throw new Error(`Request failed with status ${res.status}`);
//     }
//     const result = await res.json();
//     dispatch(actions.setGistsSuccess(result));
//   } catch (err) {
//     dispatch(actions.setGistsFailure(err.message));
//   }
// };



export default function gistsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GISTS_SET_LOADING:
      return {
        ...state,
        status: STATUS.LOADING,
      };
    case actions.GISTS_SET_SUCCESS:
      return {
        ...state,
        gists: action.payload,
        status: STATUS.SUCCESS,
      };
    case actions.GISTS_SET_FAILURE:
      return {
        ...state,
        status: STATUS.FAILURE,
        error: action.payload,
      };

    default:
      return state;
  }
}
