import * as React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <h1>Hello World!</h1>
  </React.StrictMode>
)