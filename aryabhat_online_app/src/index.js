import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './context';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>

  </Router>,
  document.getElementById('root')
);

