import { BsBag, BsPerson, BsSearch } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";

function NavBar({ onOpenCart }) {
  const [sticky, setSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage navbar visibility

  const navbarOffset = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarOffset.current) {
        const value = navbarOffset.current.getBoundingClientRect().top;
        setSticky(window.pageYOffset > value);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen); // Toggle the navbar visibility
  };

  return (
    <nav
      ref={navbarOffset}
      className={`navbar navbar-expand-lg d-flex justify-content-between ${
        sticky ? "sticky" : ""
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="nav-left">
          <div className="navbar-brand">OpenShop</div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <div className="nav-centre mx-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/collection">
                  Collection
                </a>
              </li>
              
            </ul>
          </div>
          <div className="nav-right">
            <button type="button" className="btn" onClick={onOpenCart}>
              <BsBag />
            </button>
            <button type="button" className="btn">
              <BsPerson />
            </button>
            <button type="button" className="btn">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  onOpenCart: () => {},
};

export default NavBar;