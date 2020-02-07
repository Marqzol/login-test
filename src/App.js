import React from 'react';
import './App.css';
import ConnectedLogin from './containers/login';
import { Provider } from 'react-redux';
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <ConnectedLogin/>
    </Provider>  
  )
}

export default App;
