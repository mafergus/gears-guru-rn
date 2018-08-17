import React from 'react';
import firebase from 'react-native-firebase';
import { Provider } from 'react-redux';

import MainScreen from './src/screens/MainScreen';
import store from './src/datastore/store';
import database from './src/datastore/database';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };

    database.init();
  }

  componentDidMount() {
    firebase.database().ref('garages')
      .once('value')
      .then(snapshot => {
        debugger;
      });
  }

  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}
