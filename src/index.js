import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
// before


// after
// import { createRoot } from 'react-dom/client';


// before


// after
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);