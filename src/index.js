import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'

import SettingsProvider from './providers/settings/settings.provider'

import './index.css'
import App from './App'

ReactDOM.render(
  <SettingsProvider>
    <BrowserRouter
      onUpdate={() => window.scrollTo(0, 0)}
      basename={process.env.PUBLIC_URL}
    >
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </SettingsProvider>,
  document.getElementById('root'),
)
