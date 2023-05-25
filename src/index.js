import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';

import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {setSpootifyAuthToken} from "./libs/HttpClientSpootify";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

import './styles/_main.scss';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    }
})

const handleOnBeforeLift = () => {
    setSpootifyAuthToken(store.getState().spootify.access_token)
}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} onBeforeLift={handleOnBeforeLift}>
              <QueryClientProvider client={queryClient}>
                  <CoreLayout>
                      <Routes />
                  </CoreLayout>
              </QueryClientProvider>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
