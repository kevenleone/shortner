import React from 'react';
import { EuiGlobalToastList } from '@elastic/eui';
import { useSelector, useDispatch } from 'react-redux';
import Routes from './routes';
import Load from './components/Layout/Load/Load';
import './App.scss';

function App() {
  const { toasts } = useSelector((state) => state.base);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <EuiGlobalToastList
        toasts={toasts}
        dismissToast={() => dispatch({ type: 'REMOVE_TOAST' })}
        toastLifeTimeMs={6000}
      />
      <Load />
      <Routes />
    </div>
  );
}

export default App;
