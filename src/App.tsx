import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import store from './store';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
