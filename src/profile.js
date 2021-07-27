import { Checkbox } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { show } from './profile/profileSlice';

export default function Profile() {
    const showName = useSelector((state) => state.showName.value);
    const dispatch = useDispatch();
    const [cb1, setCb1] = useState(showName);

    return (
        <div>
            <p>Vasa</p>
            <p>33</p>
            <span>Show name</span>
            <Checkbox defaultChecked={cb1} onChange={(e) => {
                setCb1(curr => e.target.checked);
                dispatch(show(e.target.checked)); // если передавать cb1 фигня выходит
            }} />
        </div>
    );
}