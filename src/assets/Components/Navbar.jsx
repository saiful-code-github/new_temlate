import React, { useState,useEffect } from 'react';
import { 
CContainer,
CNavbar,
CNavbarBrand,
 CNavbarToggler,
 CCollapse,
 CNavbarNav, 
 CNavItem,
 CDropdown,
 CDropdownToggle,
 CDropdownMenu 
} from '@coreui/react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
        const handleScroll = () =>{
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
    },[]);
  return (
    <>
     <CNavbar expand="lg" className={`${scrolled ? 'fixed': 'transparent'} `}>
      <CContainer>
        <CNavbarBrand href="#" className='text-white'><span className='text-4xl font-bold bg-gradient-to-t from-blue-300 via-blue-500 to-orange-500 text-transparent bg-clip-text'>N</span>avbar</CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className='ml-auto'> 
            <CNavItem>
              <NavLink to="/" active exact>
                Home
              </NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/about">About</NavLink>
            </CNavItem>
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Services</CDropdownToggle>
              <CDropdownMenu>
                <NavLink to="/services" activeClassName="active"> Action</NavLink>
                <NavLink to="/services" activeClassName="active"> Another action</NavLink>
                <NavLink to="/services" activeClassName="active">  Something else here</NavLink>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <NavLink to="/gallery" activeClassName="active">
                Gallery
              </NavLink>
            </CNavItem>
            <CNavItem>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>        
     </>
  )
}

export default Navbar;