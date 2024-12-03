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
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if item already exists in the cart
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add new item to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleOpenModal = () => {
    setShowCartModal(true);
  };

  const handleCloseModal = () => {
    setShowCartModal(false);
  };

  return (
    <BrowserRouter>
      <NavBar onOpenCart={handleOpenModal} />
      {showCartModal && (
        <CartModal onClose={handleCloseModal} cartItems={cartItems} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<ProductPage addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;