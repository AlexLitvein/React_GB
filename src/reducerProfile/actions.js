export const PROFILE_SHOW_NAME = 'PROFILE_SHOW_NAME';
export const PROFILE_SET_NAME = 'PROFILE_SET_NAME';

export const showName = (val) => ({
    type: PROFILE_SHOW_NAME,
    payload: val
});

export const setName = (val) => ({
    type: PROFILE_SET_NAME,
    payload: val
});

