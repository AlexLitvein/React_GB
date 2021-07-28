import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
// import App from './App';
import App from './hookContextTest/App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import orange from '@material-ui/core/colors/orange';
import { BrowserRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './profile/profileSlice';

const store = configureStore({ reducer: { showName: profileSlice } });

const myTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: orange[500]
    },
    background: {
      default: '#009999'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
