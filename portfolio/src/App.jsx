import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

export default function App() {
  return (
    <Router>
      <div class="flex flex-col min-h-screen min-w-screen">
        <Navbar />
        <main class="flex-grow p-4 w-full text-left">
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
