import React from 'react';
import ReactDOM from 'react-dom';
import './popup.css';
import PopupComponent from './PopupComponent';

ReactDOM.render(
  <React.StrictMode>

    <PopupComponent
      title="Error"
      body="Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
      et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu augue ut." 
      type="error"
    />

  </React.StrictMode>,
  document.getElementById('root')
);
