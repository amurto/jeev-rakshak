import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
                      <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>
          
          <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            
            <div className="container-fluid">
              <div className="d-flex align-items-center">
                <div className="site-logo"><img src="imgs/Logo.png" alt="Jeev-Rakshak-Logo" height="50" width="50"/></div>
                <div>
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-xl-block">
                      <li><a href="#home-section" className="nav-link">Home</a></li>
                      <li><a href="#features-section" className="nav-link">Features</a></li>
                    </ul>
                  </nav>
                </div>
                
                <div className="ml-auto">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-xl-block">
                    <li><a href="/#" className="nav-link">Contact</a></li>
                      <li><a href="/#" target="_blank" className="btn btn-outline-black py-3 px-5">Try Now</a></li>
                    </ul>
                  </nav>
                  <a href="/#" className="d-inline-block d-xl-none site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a>
                </div>
              
              </div>
            </div>
            
          </header>
        </React.Fragment>
    )
}
export default Header;