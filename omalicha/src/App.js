import SharedLayout from "./components/SharedLayout/SharedLayout.component";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SharedLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
