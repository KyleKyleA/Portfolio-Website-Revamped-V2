// Author: Kyle Angeles
// File: App.jsx
// Date-Written: 4/29/26
// Description: This file will render in the application using react routes for our portfolio website 
// to reduce the amount of code needed in the App.jsx file instead using component based reusability 
// Component wise will include:

// NavBar
// Contact Form
// Experience
// About me
// Projects whether it's class projects or personal projects
// Home -> Intro

import Card from "./components/Card.jsx";
import ContactForm from "./components/ContactForm.jsx";
import React from 'react';
import NavBar from "./components/NavBar.jsx";
import AppLayout from "./views/AppLayout.jsx";
import { Route, Routes } from "react-router-dom";
import Home from './views/Home.jsx';
import Experiences from './views/Experiences.jsx';
import Projects from './views/Projects.jsx';
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';
import NotFound from './views/NotFound.jsx'


class SimpleErrorBoundary extends React.Component {
  constructor(props) {
      super(props)
      this.state = {hasError: false};

  }

  static getDerivedStateFromError(error) {
    return {hasError: true, message: error?.message ?? 'Unknown error'};

  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught', error);
    console.error ('info?.componentStack');
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger" role="alert">
          <h4 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Something went wrong</h4>
          <p>{this.state.message}</p>
          <button type="button" class="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={this.handleReset}>
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children
  }
}


function App() {

  return (
    <>
      <SimpleErrorBoundary>
        <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      </SimpleErrorBoundary>


    </>
  );
}

export default App
