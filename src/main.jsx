// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Animate
import 'animate.css';
// Personal
import './Assets/styles/all.css';
import './Assets/styles/index.css';
import './Assets/styles/@Media.css';
import './Assets/styles/cores.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)