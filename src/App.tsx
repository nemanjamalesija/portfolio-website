import React from 'react';
import { Nav, About, Projects, Contact, Hero, Footer, FooterLower } from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <FooterLower />
    </div>
  );
}

export default App;
