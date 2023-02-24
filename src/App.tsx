import React from 'react';
import { Nav, About, Projects, Contact, Hero } from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
