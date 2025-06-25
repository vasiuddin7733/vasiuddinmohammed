import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/vasiuddinmohammed" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
