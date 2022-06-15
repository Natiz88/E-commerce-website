import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products.js";
import Cart from "./Components/Cart/Cart.js";
import Wishlist from "./Components/Cart/Wishlist.js";
import ProductDetail from "./Components/Products/Product/ProductDetail";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
