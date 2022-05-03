import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Weather from './components/Weather/Weather';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='weather'>
                    <Route path=":city" element={<Weather />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
