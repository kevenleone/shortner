import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

import '@elastic/eui/dist/eui_theme_light.css';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
),

document.getElementById('root'));
