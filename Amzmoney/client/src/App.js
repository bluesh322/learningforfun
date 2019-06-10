import React, { Component} from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import Login from "./components/Login.jsx";
import './App.css';

Axios.defaults.baseURL = 'http://localhost:5000';

class App extends Component {
  state = {
    loggedIn : false
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({
        loggedIn: true
      });
    }
  }
  login(credentials) {
    Axios.post('/users/login', credentials)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          this.setState({
          loggedIn: true
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Login login={(this.login.bind(this))} loggedIn={this.state.loggedIn}/>
        </header>
      </div>
    );
  }
}

export default App;
