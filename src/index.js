import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Goods from './Components/Goods/Goods';

import { Provider } from 'react-redux';
import store from './Store/index';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <Goods />
  </Provider>
);

// store.subscribe(setRoot);
// root.render(
//       <>
//             <div id='popup'></div>
//             <Goods />
//             <Test />
//       </>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
