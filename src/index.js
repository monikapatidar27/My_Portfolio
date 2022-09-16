import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {BrowserRouter}  from "react-router-dom"

ReactDom.render(
  <>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
      
  </>,document.getElementById("root")
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

