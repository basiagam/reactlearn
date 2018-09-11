import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Alert, {DismissableAlert, AnimatedAlert} from './ui-components/Alert'

class App extends Component {
  constructor(){
    super();

    this.state ={
        showAlert: true
    };

    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert() {
    this.setState({
      showAlert: !this.state.showAlert
    });
  }

  render() {
    return (
      <div className="container">
        <Alert type="success" show={this.state.showAlert} toggleAlert={this.toggleAlert}> 
          <small>small message</small>
        </Alert>
        <DismissableAlert type="warning" show={this.state.showAlert} toggleAlert={this.toggleAlert} message="Dmismiss"/>
        <AnimatedAlert type="danger" show={this.state.showAlert} toggleAlert={this.toggleAlert} message="Animated"/>
      </div>
    );
  }
}

export default App;
