import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
    </StrictMode>
);

reportWebVitals();