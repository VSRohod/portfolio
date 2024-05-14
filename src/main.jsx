import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'
import './styles/all.css';
import './styles/index.css';
import './styles/@Media.css';
import 'bootstrap/js/dist/modal'
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)