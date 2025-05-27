import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Callback from './callback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Callback/> */}
    <App />
  </StrictMode>,
)
