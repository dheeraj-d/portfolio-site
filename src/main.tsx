import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// legacy root-level styles (kept for layout defaults). If you prefer, move these rules into index.css or portfolio.css
import './App.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
