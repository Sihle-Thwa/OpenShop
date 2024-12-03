import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import CartModal from "./components/CartModal";
import { useState } from "react";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const handleOpenModal = () => {
    setShowCartModal(true);
  };

  const handleCloseModal = () => {
    setShowCartModal(false);
  };
  
  return (
    <>
      <BrowserRouter>
        <NavBar onOpenCart={handleOpenModal}/>
        {
          showCartModal && <CartModal onClose={handleCloseModal} />
        }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:productId" element={<ProductPage />} /> {/* Corrected here */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;