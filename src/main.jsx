import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './Assets/styles/all.css';
import './Assets/styles/index.css';
import './Assets/styles/@Media.css';
import 'bootstrap/js/dist/modal'
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)