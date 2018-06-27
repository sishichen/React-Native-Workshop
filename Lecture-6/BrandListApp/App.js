import React from 'react';
import { Provider } from 'react-redux';
import BrandScreen from './BrandScreen';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrandScreen />
      </Provider>
    );
  }
}

export default App;

