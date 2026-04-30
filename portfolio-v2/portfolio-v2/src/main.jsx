// Author: Kyle Angeles 
// File: Main.jsx
// Date: 4/29/26
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";

import App from './App.jsx'


import Home from './views/Home.jsx';
import Experiences from './views/Experiences.jsx';
import Projects from './views/Projects.jsx';
import About from './views/About.jsx';
import ContactForm from './views/ContactForm.jsx';
import NotFound from './views/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
       <Route path="experiences" element={<Experiences />} />
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
      <Route path="contactForm" element={<ContactForm />} />
      <Route path="*" element={<NotFound />} />
      
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
