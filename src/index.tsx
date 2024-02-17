import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import App from './App';
import "./assets/css/index.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from 'react-hot-toast';
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
    <Toaster position='bottom-center'
    toastOptions={{
      // Define default options
      className: '',
      duration: 6000,
      style: {
        background: '#363636',
        color: '#fff',
      },
  
      // Default options for specific types
      success: {
        duration: 3000,
        iconTheme: {
          primary: 'green',
          secondary: 'black',
        },
      },
    }}/>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
