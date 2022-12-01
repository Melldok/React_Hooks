import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import './style.css'
CounterApp



ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={0}></CounterApp>
    </React.StrictMode>
)