import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/vasiuddinmohammed" element={<Home />} />
            <Route path="/vasiuddinmohammed/projects" element={<Projects />} />
            <Route path="/vasiuddinmohammed/cv" element={<CV />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
