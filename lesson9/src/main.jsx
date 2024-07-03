import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreComponent from './Store/StoreComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreComponent>
      <App/>
    </StoreComponent>
)
