function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg justify-content-between d-flex">
      <div className="container justify-content-between d-flex">
        <div className="nav-left">NavBar</div>
        <div className="nav-centre">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
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
          <button>
            <i className="bi bi-bag"></i>
          </button>

          <i className="bi bi-search"></i>
          <i className="bi bi-person"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
