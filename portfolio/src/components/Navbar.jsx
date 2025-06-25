import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center bg-green-600 text-white p-4 space-x-4 text-lg">
      <Link to="/vasiuddinmohammed" className="hover:underline">Home</Link>
      <Link to="/experience" className="hover:underline">Experience</Link>
      <Link to="/education" className="hover:underline">Education</Link>
    </nav>
  );
}
