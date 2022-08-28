import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.component";
import SharedLayout from "./components/SharedLayout.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SharedLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
