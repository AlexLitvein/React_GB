import { Checkbox } from '@material-ui/core';
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowName } from './reducerProfile/selector';
import { showName, setName } from './reducerProfile/slice';

export default function Profile() {
    const bShowName = useSelector(getShowName);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const _setName = useCallback(() => {
        dispatch(setName(value));
    }, [dispatch, value]);


    return (
        <div>
            <div>
                <input type="text" value={value} onChange={handleChange} />
                <button onClick={_setName}>Change Name</button>
            </div>
            <span>Show name</span>
            <Checkbox defaultChecked={bShowName} onChange={(e) => {
                dispatch(showName(e.target.checked));
            }} />
        </div>
    );
}