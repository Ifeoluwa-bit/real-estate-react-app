import React from 'react';
import Footer from './components/Footer/Footer';
import Featured from './components/Featured/Featured';
import Best from './components/Best/Best';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
