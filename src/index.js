import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import SettingsProvider from './providers/settings/settings.provider'

import './index.css'
import App from './App'

ReactDOM.render(
  <SettingsProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </SettingsProvider>,
  document.getElementById('root'),
)
