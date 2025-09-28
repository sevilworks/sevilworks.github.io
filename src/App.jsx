import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Experience, Hero, Navbar } from './components';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
      </div>
    </BrowserRouter>
  );
};

export default App;
