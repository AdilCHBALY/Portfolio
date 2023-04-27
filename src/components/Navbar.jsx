import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav>
        <div className="links">
            <div className="logo">Troika <span>|</span> dev</div>
            <ul>
                <li><a href="#Main">Home</a></li>
                <li><a href="#whoami">About</a></li>
                <li><a href="#Projects">Project</a></li>
                {/* <li><a href="#Certif">Certification</a></li> */}
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
