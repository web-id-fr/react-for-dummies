import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserSelectionProvider } from './contexts/UserSelection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <UserSelectionProvider>
        <App />
    </UserSelectionProvider>
  // </React.StrictMode>,
)
