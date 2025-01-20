import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
     {/* ------------ SECTION :-   FOOTER---------- */}

     <footer className="footer_main">
        <div className="main_vertical-1">
        <Link to='#'></Link>
          
            <h1>Chill <span>ax</span></h1>
          
          <p>Tax No. 08AAECT7203P1ZX</p>
          <p>
          Chillax is a premium ice cream brand that delivers happiness in every scoop. Our mission is to craft the finest ice creams using fresh, natural ingredients and innovative flavors to satisfy your sweet cravings. <br />
            <br />Be it sweets, savoury, dry fruits, dried fruits or hampers,
            all the offerings of Shahi Swad promise premium quality, delectable
            taste, hygiene and a smile on your face.
          </p>
          <h6>Follow Us</h6>
          <div className="icons-social">
          <Link to='#'><i className="fa-brands fa-instagram"></i></Link>
          <Link to='#'><i className="fa-brands fa-facebook"></i></Link>
          <Link to='#'> <i className="fa-brands fa-linkedin"></i></Link>
          <Link to='#'><i className="fa-brands fa-x-twitter"></i></Link>
            
            

            
          </div>
        </div>

        <div className="main_vertical-common">
          <h5>our services</h5>
          <div className="flex_column">
          <Link to='#'><i className="fa-solid fa-angle-right"></i>
          About</Link>
            
            <Link to='#'><i className="fa-solid fa-angle-right"></i>
            Bulk orders</Link>
            
            <Link to='#'> <i className="fa-solid fa-angle-right"></i>
            Careers</Link>
           
            <Link to='#'> <i className="fa-solid fa-angle-right"></i>
            Contact us</Link>
            
            <Link to='#'><i className="fa-solid fa-angle-right"></i>
            Our Story</Link>
           
            <Link to='#'> <i className="fa-solid fa-angle-right"></i>
            Testimanial</Link>
           
            <Link to='#'><i className="fa-solid fa-angle-right"></i>
            Blog</Link>
            
          </div>
        </div>

        <div className="main_vertical-common">
          <h5>useful links</h5>

          <div className="flex_column">

          <Link to='#'><i className="fa-solid fa-angle-right"></i>
          Refund & Cancellaion Policy</Link>
          
            <Link to='#'>  <i className="fa-solid fa-angle-right"></i>
            Store Policy</Link>
            
            <Link to='#'><i className="fa-solid fa-angle-right"></i>
            Disclaimer</Link>
            
            <Link to='#'> <i className="fa-solid fa-angle-right"></i>
            Store Locator</Link>
           


            <Link to='#'> <i className="fa-solid fa-angle-right"></i>
            Shop Global</Link>
            


            <Link to='#'><i className="fa-solid fa-angle-right"></i>
            Online Payment Policy</Link>
           

            <Link to='#'> <i className="fa-solid fa-angle-right"></i>
            Terms & conditions</Link>
           
          </div>
        </div>
      </footer>
    
    
    
    </>
  )
}

export default Footer