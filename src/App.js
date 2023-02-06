import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import PGallery from './pages/PGallery';
import Contact from './pages/Contact';

import Header from './components/Header';
import Project from './components/Project';


function App() {
  return (
    < >

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<PGallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Project />

    </>
  );
}

export default App;
