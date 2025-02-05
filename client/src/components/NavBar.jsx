import { BsBag, BsPerson, BsSearch } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Search from "./Search";

function NavBar({ onOpenCart }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const value = navbarRef.current.getBoundingClientRect().top;
        setIsSticky(window.pageYOffset > value);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };

  const handleSearchSubmit = (query) => {
    navigate(`/collection?search=${query}`);
    setIsSearchOpen(false);
  };

  const handleCollectionClick = () => {
    setIsSearchOpen(false);
    navigate("/collection");
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg d-flex justify-content-between ${isSticky ? "sticky" : ""}`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/ ">OpenShop</a>
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
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <div className="mx-auto">
            <ul className="navbar-nav">
              {!isSearchOpen && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleCollectionClick}>
                      Collection
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className=" d-flex align-items-center">
            {isSearchOpen ? (
              <Search
                onSearchSubmit={handleSearchSubmit}
                setIsSearchOpen={setIsSearchOpen}
              />
            ) : (
              <button
                type="button"
                className="btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <BsSearch />
              </button>
            )}
            <button
              type="button"
              className="btn"
              onClick={onOpenCart}
              aria-label="Open cart"
            >
              <BsBag />
            </button>

            <button
              type="button"
              className="btn dropdown"
              aria-label="User account"
            >
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <BsPerson />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/login">Login</a></li>
                <li><a className="dropdown-item" href="/register">Register</a></li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  onOpenCart: PropTypes.func.isRequired,
};

export default NavBar;