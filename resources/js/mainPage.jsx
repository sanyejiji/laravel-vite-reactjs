import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

//sweetalert2
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import "sweetalert2/dist/sweetalert2.css";
window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
})
window.toast = toast;

ReactDOM.createRoot(document.getElementById('mainView')).render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

)


