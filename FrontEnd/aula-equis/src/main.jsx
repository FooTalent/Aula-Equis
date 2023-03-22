import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { AulaRouter } from './aula-equis/routes/AulaRouter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AulaRouter />
    </HashRouter>
  </React.StrictMode>
)
