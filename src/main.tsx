import '@app/global.css'

import {App} from '@app/components/App'
import React from 'react'
import ReactDOMClient from 'react-dom/client'

const container = document.querySelector('#root')
if (container == null) {
  throw new Error('Missing container!')
}

const root = ReactDOMClient.createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
