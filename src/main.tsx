import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeConfig } from './styles/theme.config.tsx'
import './styles/estilosCss.css'  
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeConfig>
      <SnackbarProvider
      maxSnack={6}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      preventDuplicate
      >
        <App />
        </SnackbarProvider>
    </ThemeConfig>
  </React.StrictMode>,
)
