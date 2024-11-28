import { useState } from "react";
import TopHeader from "../components/TopHeader";
import { femaleImages, maleImages } from "../assets/headerImages"; // Adjust the path as necessary
import "./Home.css"; // Import a CSS file for styling
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/products"; // Adjust the path as necessary

function Home() {
  const [selectedImages, setSelectedImages] = useState(femaleImages); // Default to female images

  const handleGenderSelection = (gender) => {
    if (gender === "female") {
      setSelectedImages(femaleImages);
    } else {
      setSelectedImages(maleImages);
    }
  };

  const currentItems = products.slice(50, 54);

  return (
    <div className="container">
      <TopHeader />
      <div className="row">
        <div className="d-flex justify-content-center align-content-center">
          <button
            className="btn btn-link text-decoration-none text-black"
            onClick={() => handleGenderSelection("female")}
          >
            <h6 className="p-4">FOR HER</h6>
          </button>
          <button
            className="btn btn-link text-decoration-none text-black"
            onClick={() => handleGenderSelection("male")}
          >
            <h6 className="p-4">FOR HIM</h6>
          </button>
        </div>
      </div>
      <div className="image-grid">
        {selectedImages.map((image, index) => (
          <div className="image-container" key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
      <Banner />

      <div className="row p-4">
        <h2 className="text-center">New Collection</h2>
      </div>
      <div className="row">
        {currentItems.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
