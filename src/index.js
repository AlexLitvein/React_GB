import * as fb from "./firebase";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './store';
import reportWebVitals from './reportWebVitals';
import CssBaseline from "@material-ui/core/CssBaseline";

import './index.css';
import App from './App';
import MyTheme from './theme';
import MyStore from './store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MyTheme}>
      <CssBaseline />
      <Provider store={MyStore}>
        {/* <PersistGate persistor={persistor} loading={<div>Loading...</div>}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
