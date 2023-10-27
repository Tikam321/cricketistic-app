import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import App from './App';
import "./assets/css/index.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import  store  from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const store = configureStore({
//   reducer: {
//     ranking: rankingReducer
//   }
// });
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
