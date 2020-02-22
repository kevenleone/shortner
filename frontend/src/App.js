import React from 'react';
import { ToastContainer } from 'react-toastify';
import Load from './components/Layout/Load/Load';
import Routes from './routes';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Load />
      <Routes />
    </div>
  );
}

export default App;
