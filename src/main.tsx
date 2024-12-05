import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { persistore, store } from './store/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import "./main.css"
import "./reset.css"
createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <Provider store={store}>
          <PersistGate persistor={persistore}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </StrictMode>
)
