import { BsFacebook, BsTwitterX, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="container justify-content-between p-4 bg-light">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="mb-3">
            <h6>Office hours</h6>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-light">
                Mon-Fri 08:00 - 16:00
              </li>
              <li className="list-group-item bg-light">Sat 10:00 - 14:00</li>
              <li className="list-group-item bg-light">Sunday Closed</li>
            </ul>
          </div>
        </div>
        <div className="col justify-content-center ">
          <div className="mb-3 ">
            <h6>Socials</h6>
            <div className="row p-1">
              <BsTwitterX style={{ fontSize: "2rem" }} />
            </div>
            <div className="row p-1">
              <BsFacebook style={{ fontSize: "2rem" }} />
            </div>
            <div className="row p-1">
              <BsWhatsapp style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
        <div
          className="col d-flex
        justify-content-center align-items-center"
        >
          <div className="mb-3">
            <h6>Newsletter</h6>
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control  d-flex justify-content-between"
              placeholder="email@address.com"
            ></input>
            <button className="btn subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col">E-Commerce - Clothing and Branding</div>
        <div className="col">
          A Website by Siphesihle Mthethwa (SBMConcepts)
        </div>
      </div>
    </div>
  );
}

export default Footer;
