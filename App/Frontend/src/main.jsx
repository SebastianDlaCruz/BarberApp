import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './style-components/global/GlobalStyle';
import Root from './routes/Root';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Root} />
  </React.StrictMode>
)
