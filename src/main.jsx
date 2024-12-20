import React from "react";
import ReactDOM from "react-dom/client";
import '@/styles/app.css'
import { BrowserRouter as Router } from 'react-router-dom';

import TodoApp from "@/components/TodoApp";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
    <React.StrictMode>
        <Router>
        <TodoApp />
        </Router>
    </React.StrictMode>
);