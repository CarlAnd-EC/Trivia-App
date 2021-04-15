import React from 'react';
import './App.css';
import logo from './logo.svg';
import Trivia from "./shared/views/Trivia";

const otdbLogo = process.env.PUBLIC_URL + "/images/OpenTDb.png";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      player:"",
      idGame:"",
      serverURL:"http://:8080"
    }
  }
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Basic Trivia App</h1>
          <h2>Welcome to this fun trivia!</h2>
        </header>
        <main className="App-main">
          {/* Organisms */}
          {/* Molecules */}
          {/* Atoms */}
          Let's play!
          <Trivia/>
        </main>
        <footer className="App-footer">
          <h4>Created by <i>Carlos Andrés Escalona Contreras</i> April, 2021</h4>
          <h4>Powered by
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              React
            </a>
            <img src={logo} className="App-logo" alt="logo"/>
            &
            <a className="App-link" href="https://opentdb.com" target="_blank" rel="noopener noreferrer">
              Open Trivia Database
            </a>
            <img src={otdbLogo} className="" alt="logo"/>
          </h4>
        </footer>
      </div>
    );
  }
}

export default App;
