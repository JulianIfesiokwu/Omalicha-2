import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.component";
import SharedLayout from "./components/SharedLayout.component";
import Homepage from "./pages/Homepage/Homepage.component";
import ProductsPage from "./pages/Productspage/Productspage.component";
import ContactPage from "./pages/Contactpage/ContactPage.component";
import CheckoutPage from "./pages/CheckoutPage/Checkout.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="/" element={<Homepage />}></Route>
            <Route path="/products" element={<ProductsPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
