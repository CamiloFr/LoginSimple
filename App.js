import React from 'react';
import RootScreens from './src/navigation/RootScreen';
import {Provider} from 'react-redux';
import store from './src/store/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreens />
      </Provider>
    );
  }
}
