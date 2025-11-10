import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AlPlatoApp from './AlPlatoApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AlPlatoApp />
  </StrictMode>,
)
