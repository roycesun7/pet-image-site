import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-md bg-stone-700 z-10">
      <Link to="/" className="text-xl font-bold">Pet Gallery</Link>
      <div>
        <Link to="/about" className="px-4 py-2 rounded bg-blue-500 text-white">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
