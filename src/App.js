import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Project from './pages/Project';
import PGallery from './components/PGallery';
import Contact from './pages/Contact';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    < >
    <Home />

    <Header />

    <Project />

    <PGallery />

    <Contact />
    </>
  );
}

export default App;
