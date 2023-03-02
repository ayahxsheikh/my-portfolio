import {Routes, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


import Home from './pages/Home';
import PGallery from './pages/PGallery';
import Contact from './pages/Contact';

import Header from './components/Header';


library.add(fab)


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
