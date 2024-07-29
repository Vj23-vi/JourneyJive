import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dubai from './Components/searchPlaces/Dubai.jsx'
import LoginForm from './Components/login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <LoginForm/> */}
  </React.StrictMode>,
)
