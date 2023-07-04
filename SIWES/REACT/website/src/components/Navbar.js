import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
// import {faCoffee} from '@fortawesome/free-brands-svg-icons';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                TRVL <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </Link>
            {/* <div className='menu-icon' onClick={handleClick}>
                <i className={click ? <FontAwesomeIcon icon={fa-regular fa-xmark : fas fa-bars}></FontAwesomeIcon>}/>
            </div> */}
        </div>
    </nav>
    </>
  )
}

export default Navbar
