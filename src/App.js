import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import './components/style947.css';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
        <header className="App-header container">
          <h1 className="App-title">Welcome to Radio Bingo</h1>
        </header>

        <div className="App-intro container">
          If you are looking for fun and the chance to win fantastic prizes all
          whilst listening the radio, you have come to the right place!
        </div>

        <div className="App-signin container">
          <Button className="btn btn-primary"
            type="submit"
            block
          >
            Sign In
          </Button>
        </div>

        <div className="App-signup container">
          <Button className="btn btn-primary"
            type="submit"
            block
          >
            Sign Up
          </Button>
        </div>

      </div>
    );
  }
}

export default App;
