import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between">
        <h1 className="text-xl font-bold">AI Website</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/create">Create</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;