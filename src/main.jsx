import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Rourer/Rourer.jsx'
import Firebase from './Components/Firebase/Firebase.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Firebase>
      <RouterProvider router={router}></RouterProvider>
    </Firebase>
  </React.StrictMode>,
)
