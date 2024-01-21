import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:uid" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
