import {Routes, Route} from 'react-router-dom';
// import {useState} from 'react';
// import projects from './projects.json';

import Home from './pages/Home';
import PGallery from './pages/PGallery';
import Contact from './pages/Contact';

import Header from './components/Header';


function App() {

  return (
    < >

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-gallery" element={<PGallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    

    </>
  );
}

export default App;
