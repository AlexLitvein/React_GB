import logo from './logo.svg';
import './App.css';

function Message(props) {
  return (
    <div className="msg">
      {props.text}
    </div>
  );  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message text = {'Привет!'}/>
      </header>
    </div>
  );
}

export default App;
