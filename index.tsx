import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import './index.css';
import App from './App';
import store from './store/store'; // Make sure your store is imported correctly
import { Provider } from 'react-redux';

// Create a root element reference
const rootElement = document.getElementById('root');

// If the root element exists, create the root and render the app
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root using React 18 API
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
