import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
