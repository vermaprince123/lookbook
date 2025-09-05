/**
 * Entry point for the Lookbook React application.
 * Renders the App component inside the root DOM node.
 * Uses React StrictMode for highlighting potential problems.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
