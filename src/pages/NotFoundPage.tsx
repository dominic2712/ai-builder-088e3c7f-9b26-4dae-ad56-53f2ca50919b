import React from 'react';
import NavBar from '../components/NavBar';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-4">
        <h2 className="text-3xl font-bold text-center">404 - Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFoundPage;