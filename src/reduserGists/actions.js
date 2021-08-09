const API_URL_PUBLIC = "https://api.github.com/gists/public";
const API_URL_GIST = "https://api.github.com/gists/";

export const GISTS_GET_ALL = 'GISTS_GET_ALL';
export const GISTS_SET_LOADING = "GISTS_SET_LOADING";
export const GISTS_SET_SUCCESS = "GISTS_SET_SUCCESS";
export const GISTS_SET_FAILURE = "GISTS_SET_FAILURE";

export const setGistsLoading = () => ({
    type: GISTS_SET_LOADING,
    payload: API_URL_PUBLIC,
});

export const setGistsSuccess = (data) => ({
    type: GISTS_SET_SUCCESS,
    payload: data,
});

export const setGistsFailure = (err) => ({
    type: GISTS_SET_FAILURE,
    payload: err,
});
