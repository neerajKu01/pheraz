import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import NotFound from './pages/NotFound.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/pheraz/" element={<Home />} />
          <Route path="/pheraz/product/:id" element={<Product />} />
          <Route path="/pheraz/about" element={<AboutUs />} />
          <Route path="/pheraz/contact" element={<ContactUs />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
