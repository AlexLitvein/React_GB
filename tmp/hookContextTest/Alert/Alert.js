import React from 'react';
import { useAlert } from './AlertContext';



export default function Alert() {
    const alert = useAlert();

    if(!alert.visible) return null;

    return (
        <div className="" onClick={alert.toggle}>
            Эto очень и очень важное сообщение!
        </div>
    )
}