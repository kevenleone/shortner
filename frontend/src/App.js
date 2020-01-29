import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './redux/store';
import Load from './components/Layout/Load/Load';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Load />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
