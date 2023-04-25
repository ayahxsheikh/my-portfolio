import {Routes, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/Home';
import About from './pages/About';
import PGallery from './pages/PGallery';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';


library.add(fab, fas)


function App() {

  return (
    < >

    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project-gallery" element={<PGallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
