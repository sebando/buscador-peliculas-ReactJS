import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Movieapp } from './Movieapp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Movieapp />
  </StrictMode>,
)
