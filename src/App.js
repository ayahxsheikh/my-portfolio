import './App.css';
import Home from './pages/Home';
import PGallery from './pages/PGallery';
import Contact from './pages/Contact';

import Header from './components/Header';
import Project from './components/Project';

// import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    < >
    <Header />

    <Home />

    <PGallery />

    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<PGallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> */}

    <Project />

    <Contact />

    </>
  );
}

export default App;
