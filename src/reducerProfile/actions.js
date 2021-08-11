import firebase from "firebase";

export const PROFILE_SHOW_NAME = 'PROFILE_SHOW_NAME';
export const PROFILE_SET_NAME = 'PROFILE_SET_NAME';
export const PROFILE_INIT = 'PROFILE_INIT';

export const showName = (val) => ({
    type: PROFILE_SHOW_NAME,
    payload: val
});

export const setName = (val) => ({
    type: PROFILE_SET_NAME,
    payload: val
});

export const initProfileTracking = (dispatch) => {
    try {
        firebase.database()
            .ref("profile")
            .child(firebase.auth().currentUser.uid)
            .on("value", (snapshot) => {
                let payload = {};
                snapshot.forEach((itm) => {
                    payload = { ...payload, [itm.key]: itm.val() };
                });

                dispatch({
                    type: PROFILE_INIT,
                    payload
                });
            });
    } catch (e) {
        console.log(e);
    }
};

