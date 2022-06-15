import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products.js';
import Cart from './Components/Cart/Cart.js';
import Wishlist from './Components/Cart/Wishlist.js';
import ProductDetail from './Components/Products/Product/ProductDetail';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/productDetail/:id" element={<ProductDetail />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;