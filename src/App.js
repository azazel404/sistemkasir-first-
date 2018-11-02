import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CONF STORE REDUX
import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <h1>Hello Universe</h1>
        </Provider>
      </div>
    );
  }
}

export default App;
