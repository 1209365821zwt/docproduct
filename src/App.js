import React from 'react';
import Router from './router/router'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/store'
import 'antd/dist/antd.css'
import 'lib-flexible'
function App() {
  return (
    <Provider store={store}>
  <div className="App">
      <BrowserRouter>
      <Router></Router>
      </BrowserRouter>
    </div>
    </Provider>

  );
}

export default App;
