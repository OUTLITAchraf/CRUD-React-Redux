import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
// import reducer from './Config/reducer';
import reducer from './CRUD SP and filter/Config/reducer';
import AppFilter from './AppFilter';


const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppFilter />
    </Provider>
  </React.StrictMode>
);


