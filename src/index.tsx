import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createRoot } from 'react-dom/client'
import AppLayout from './layout/AppLayout'
import AppRoutes from './config/routes'
import { BrowserRouter } from 'react-router-dom'

import './config/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})


const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)