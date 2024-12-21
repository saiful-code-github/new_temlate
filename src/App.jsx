import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
             <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
