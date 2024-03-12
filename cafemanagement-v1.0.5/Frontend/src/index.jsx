import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";
import {CategoryProvider} from './context/category'
import { Provider } from 'react-redux';
import store from './slice/store';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
<CategoryProvider>
<App />
</CategoryProvider>
</Provider>
);
