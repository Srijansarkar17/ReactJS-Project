import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'


const reactElement = React.createElement( //written the description in ipad
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

createRoot(document.getElementById('root')).render(
  reactElement
)
