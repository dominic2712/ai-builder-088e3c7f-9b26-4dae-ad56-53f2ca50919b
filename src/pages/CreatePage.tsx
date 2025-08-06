import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

const CreatePage: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('/api/items', { name })
      .then(response => {
        alert('Item created!');
      })
      .catch(error => {
        console.error('Error creating item:', error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-4">
        <h2 className="text-2xl font-bold mb-4">Create Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item Name"
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;