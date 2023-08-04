import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import DrWakil from './pages/DrWakil'
import Book from './pages/Book'
import Oconcept from './pages/Oconcept'
import Oshot from './pages/Oshot'
import Gshot from './pages/Gshot'
import Og from './pages/Og'
import Chair from './pages/Chair'
import Labia from './pages/Labia'
import Thermi from './pages/Thermi'
import Co from './pages/Co'
import OtherTreatments from './pages/OtherTreatments'
import { HelmetProvider } from 'react-helmet-async'




const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  


  return (
    <>
    <HelmetProvider>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/vampire-breastlift" element={<VampireBreastLift />} />
        <Route path="/vampire-facelift" element={<VampireFaceLift />} /> */}

         
        {/* <Route path="/breast-augmentation" element={<Augmentation />} />
        <Route path="/breast-fat-enlargement" element={<Fat />} />
        <Route path="/breast-reduction" element={<Reduction />} /> */}

        <Route path="/" element={<Oshot/>} />
        <Route path="/gshot-injection-in-london" element={<Gshot/>} />
        <Route path="/o-shot-and-g-shot-in-london" element={<Og/>} />
        <Route path="/o-concept-chair-in-london" element={<Chair/>} />
        <Route path="/thermiva-feminine-wellness-in-london" element={<Thermi/>} />
        <Route path="/labia-fillers-in-london" element={<Labia/>} />
        <Route path="/co2-re-intima-in-london" element={<Co/>} />

        <Route path="/o-concept-treatment-in-london/" element={<Oconcept/>} />
        <Route path="/dr-wakil" element={<DrWakil />} />
        <Route path="/other-treatments" element={<OtherTreatments />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<Book/>}/>
      </Routes>
      </HelmetProvider>
    </>
    
  );
};

export default App
