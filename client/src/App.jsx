import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import { useState } from "react";
import CartModal from "./components/CartModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  return (
    <BrowserRouter>
      <NavBar onOpenCart={handleOpenCart} />
      
      {isCartOpen && <CartModal onClose={handleCloseCart} cart={cart} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route
          path="/product/:productId"
          element={<ProductPage cart={cart} setCart={setCart} />}
        />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
