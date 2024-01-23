import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormUseCustomHook } from '../useEffectHooks/formUseCustomHook'


import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormUseCustomHook />
  </React.StrictMode>,
)
