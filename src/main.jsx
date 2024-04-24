import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer autoClose={1500} position="top-center" />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
