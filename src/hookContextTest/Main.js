import React from 'react'
import { useAlert } from './Alert/AlertContext'

export default function Main() {
    const {toggle} = useAlert();
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={toggle} className="" > Показать alert</button>
        </>
    )
}