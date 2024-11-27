import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
