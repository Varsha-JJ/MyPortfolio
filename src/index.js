import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Document from './Pages/Documents';
import Header from './Pages/Header';
import Education from './Pages/Education';
import Experience from './Pages/Experience';
import ThemeProvider from './Componets/ThemeProvider';
import Footer from './Pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route path='/' element={<App/>}/>
            <Route path='projects' element={<Document/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='education' element={<Education/>}/>
            <Route path='experience' element={<Experience/>}/>
            <Route path='footer' element={<Footer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
