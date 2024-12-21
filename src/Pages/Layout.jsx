import React from 'react'
import Navbar from '../assets/Components/Navbar';
import Footer from '../assets/Components/Footer';

const Layout = ({children}) => {
  return (
     <>
      <Navbar/>
      <div>{children}</div>
      <Footer/>
     </>
  )
}

export default Layout;