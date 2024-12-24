import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DarkModeProvider } from '/src/hoc/DarkModeContext.jsx';
import '/src/index.css'
import App from '/src/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>,
)
