import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './pages/Navigation';
import { Toaster } from 'react-hot-toast';
import './index.css';  
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Proyects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>
      <main>
        
        <Navigation/>
          <section>
          <Routes>
              {/* Ruta principal a home*/}
              <Route path="/" element={<Navigate to="/home" />} />
              {/* Ruta home */}
              <Route path="/home" element={<Home />} />
              {/* Ruta para mostrar "sobre mi" */}
              <Route path="/about-me" element={<AboutMe/>} />
              {/* Ruta de mis proyectos */}
              <Route path="/projects" element={<Proyects />} />
              {/* Ruta para llevar a skills */}
              <Route path="/skills" element={<Skills />} />
              {/* Ruta para ver los detalles de un vehículo por placa */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Toaster />
          </section>
      </main>
    </BrowserRouter>
  )
}

export default App
