import { useState, useRef, useEffect } from 'react'

import './App.css'
import Footer from './Footer/Footer.tsx'
import Header from './Header/Header.tsx'
import Gallery from './Gallery/Gallery.tsx'



function App() {
  const [page, setPage] = useState("Home");  


  return(
    
    <>
    <Header handleclick={setPage}/>
    <div className="App">
      <div className="wrapper">
    <Gallery page={page}/>
    <Footer />
    </div>
    </div>
    </>
  );
}

export default App
