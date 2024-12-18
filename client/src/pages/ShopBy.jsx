import "./ShopBy.css";
import bg from "../assets/bg.png";
import bg1 from "../assets/bg-56.png";
import bg2 from "../assets/bg3.png";

function ShopBy() {
  return (
    <div className="container">
      <div className="row">
        <h3 className="heading_3">Shop By Category</h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 shopby-category">
          <img src={bg} alt="Shop For Men" className="shopby-image" />
          <h5 className="shopby-text">Shop For Men</h5>
          <button className="shopby-button">Shop Now</button>
        </div>
        <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 shopby-category">
          <img src={bg1} alt="Shop For Winter" className="shopby-image" />
          <h5 className="shopby-text">Shop For Winter</h5>
          <button className="shopby-button">Shop Now</button>
        </div>
        <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 shopby-category">
          <img src={bg2} alt="Shop For Women" className="shopby-image" />
          <h5 className="shopby-text">Shop For Women</h5>
          <button className="shopby-button">Shop Now</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ShopBy;