// Author: Kyle Angeles 
// File: Main.jsx
// Date: 4/29/26
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";

import App from './App.jsx'

import AppLayout from './views/AppLayout.jsx';
import Home from './views/Home.jsx';
import Experiences from './views/Experiences.jsx';
import Projects from './views/Projects.jsx';
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';
import NotFound from './views/NotFound.jsx';


import { projectLoader } from './utils/projectLoader';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route element={<AppLayout/>}>
      <Route index element={<Home />} />
       <Route path="experiences" element={<Experiences />} />
      <Route path="projects" element={<Projects />} loader={projectLoader} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)
