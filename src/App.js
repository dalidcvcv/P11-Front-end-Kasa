import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './Pages/Accueil.jsx';  
import Header from './Components/Header.jsx';  
import APropos from './Pages/APropos.jsx';
import Footer from './Components/Footer.jsx';
import Apartment from './Pages/Apartment.jsx';
import Error from './Pages/Error.jsx';


function App () {
  return (
    <div>
      <Header />
          <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/APropos' element={<APropos />} />
            <Route path="/Apartment/:id" element={<Apartment />} />
            <Route path="*" element={<Error />} />
          </Routes>
      <Footer />
    </div>
  )
}
export default App
