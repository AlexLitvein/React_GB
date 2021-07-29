import { Checkbox } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { show } from './profile/profileSlice';

export default function Profile() {
    const showName = useSelector((state) => state.showName.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Vasa</p>
            <p>33</p>
            <span>Show name</span>
            <Checkbox defaultChecked={showName} onChange={(e) => {
                dispatch(show(e.target.checked));
            }} />
        </div>
    );
}