import React from 'react';
import ReactDOM from 'react-dom';
import './def.css';
import MessageComponent from './MessageComponent';

ReactDOM.render(
  <React.StrictMode>

    <MessageComponent
      title="Error"
      body="An error has occured, please try once more!
      An error has occured, please try once more!
      An error has occured, please try once more!
      An error has occured, please try once more!"
      bgcolor="red"
    />

  </React.StrictMode>,
  document.getElementById('root')
);
