import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Guess from './routes/guess';
import Rsvp from './routes/rsvp';
import Donate from './routes/donate';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='guess' element={<Guess />} />
          <Route path='rsvp' element={<Rsvp />} />
          <Route path='donate' element={<Donate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
