import { BsBag, BsPerson, BsSearch } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const navbar = useRef(null);
  const navbarOffset = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarOffset.current) {
        const value = navbarOffset.current.getBoundingClientRect().top;
        setSticky(window.pageYOffset > value);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Set initial navbar height after component mounts
    if (navbar.current) {
      navbar.current.style.height = `${
        navbar.current.getBoundingClientRect().height
      }px`;
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependency array ensures this effect runs only once

  return (
    <nav
      ref={navbarOffset}
      className={`navbar navbar-expand-lg justify-content-between d-flex ${
        sticky ? "sticky" : ""
      }`}
    >
      <div className="container justify-content-between d-flex">
        <div className="nav-left">
          <div className="nav-brand">OpenShop</div>
        </div>
        <div className="nav-centre">
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
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <button type="button" className="btn">
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
    </nav>
  );
}

export default NavBar;
