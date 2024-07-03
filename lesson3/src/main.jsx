import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Register from './register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="" element = {<h1>Xin chào</h1>} />
    <Route path="/home" element = {<App/>} />
    <Route path="/register" element = {<Register/>}/>
    </Routes>
  </BrowserRouter>
);
