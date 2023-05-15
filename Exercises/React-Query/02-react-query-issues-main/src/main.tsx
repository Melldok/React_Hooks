import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';

//! Remover enable css source maps
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';
import { QueryClient, QueryClientProvider  } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 

    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
    <React.StrictMode>
        <RouterProvider router={ router } />
      </React.StrictMode>
    </QueryClientProvider>
)
