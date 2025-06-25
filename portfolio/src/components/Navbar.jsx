import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="flex justify-center bg-green-600 text-white p-4 space-x-4 text-xl">
      <Link to="/vasiuddinmohammed" class="hover:underline">Home</Link>
      <Link to="/experience" class="hover:underline">Experience</Link>
      <Link to="/education" class="hover:underline">Education</Link>
    </nav>
  );
}
