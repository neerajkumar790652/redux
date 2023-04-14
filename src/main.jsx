import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { Provider } from 'react-redux';
import Mystore from './Redux/MyStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Mystore}>
    <App />
  </Provider>
)
