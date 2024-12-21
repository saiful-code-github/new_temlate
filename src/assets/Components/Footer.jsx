import React, { useEffect,useState } from 'react';
import { CContainer, CFooter, CLink } from '@coreui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [VisibleTop, SetVisibleTop] = useState(false);
    const topBottom = () =>{
          window.scrollTo({
               top:0,
               behavior: 'smooth'
          })
    }
    const handleSrorll = () =>{
        if(window.scrollY > 250){
            SetVisibleTop(true)
        }else{
            SetVisibleTop(false)
        }
    }
    useEffect(() =>{
         window.addEventListener("scroll", handleSrorll);
         return () => {
            window.removeEventListener('scroll', handleSrorll )
         }
    },[])
    return (
        <>
            <CFooter className='bg-black'>
                <CContainer className='flex justify-between'>
                    <div className='text-white'>
                        <CLink href="https://coreui.io" style={{textDecoration: "none",color: "pink"}}>CoreUI</CLink>
                        <span>&copy; 2024 creativeLabs.</span>
                    </div>
                    <div className='text-white'>
                        <span>Powered by</span>
                        <CLink href="https://coreui.io" style={{textDecoration: "none",color: "pink"}}>CoreUI</CLink>
                    </div>
                </CContainer>
                {/* top to bottom button */}
                { VisibleTop && (
                        <div onClick={topBottom} className='topBottom'>
                        <FontAwesomeIcon icon={faArrowUp}/>
                        </div>
                    )
                }
               
            </CFooter>
        </>
    )
}

export default Footer;