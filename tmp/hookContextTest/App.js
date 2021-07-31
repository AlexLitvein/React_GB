import React from 'react'
import Main from '../hookContextTest/Main'
import Alert from './Alert/Alert'
import { AlertProvider } from './Alert/AlertContext'

function App() {
    
    return (
        <AlertProvider>
            <div className={'container'}>
                <Alert />
                <Main toggle={()=>{}}/>
            </div>
        </AlertProvider>
    )
}
export default App;