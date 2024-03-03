import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const app = document.getElementById('app')!
const root = createRoot(app)

root.render(
  <StrictMode>
    <div />
  </StrictMode>,
)
