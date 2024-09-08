import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';


// Below following imports for Redux:
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import  rootReducer  from '/src/services/reducers/index.js';

const store = legacy_createStore(rootReducer);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
