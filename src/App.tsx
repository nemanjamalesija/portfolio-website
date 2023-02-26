import React from 'react';
import { Nav, About, Projects, Contact, Hero, Footer } from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
