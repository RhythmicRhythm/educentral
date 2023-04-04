import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "./pages/Community/Dashboard/context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <ThemeProvider>
   <MaterialTailwindControllerProvider>
          <App />
        </MaterialTailwindControllerProvider>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
