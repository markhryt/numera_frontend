import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './assets/store/store.js';
import { RouterProvider } from "react-router-dom";
import { router } from './router.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>

);
