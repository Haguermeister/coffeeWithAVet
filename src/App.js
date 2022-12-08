import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
