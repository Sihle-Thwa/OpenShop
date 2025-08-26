import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import CartModal from "./components/modals/CartModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the product already exists in the cart, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product does not exist, add it to the cart with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <BrowserRouter>
      <NavBar onOpenCart={handleOpenCart} />
      {isCartOpen && <CartModal onClose={handleCloseCart} cart={cart} />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<Collection onAddToCart={handleAddToCart} />} />
        <Route path="/product/:productId" element={<ProductPage onAddToCart={handleAddToCart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;