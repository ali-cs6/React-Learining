import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// we use dom like method
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

//default code (2nd method)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
