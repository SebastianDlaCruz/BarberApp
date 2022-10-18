import React from 'react'
import ReactDOM from 'react-dom/client'
import BarberApp from './BarberApp'
import { GlobalStyle } from './style-components'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/root/router'
import { UserProvider } from './context/userProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle />
      <RouterProvider router={router}>
        <BarberApp />
      </RouterProvider>

    </UserProvider>
  </React.StrictMode>
)
