import { BsBag, BsPerson, BsSearch } from "react-icons/bs";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg justify-content-between d-flex">
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
