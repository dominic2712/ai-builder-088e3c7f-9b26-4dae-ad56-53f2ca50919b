import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';

const EditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/items/${id}`)
      .then(response => {
        setName(response.data.name);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching item:', error);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.put(`/api/items/${id}`, { name })
      .then(response => {
        alert('Item updated!');
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-4">
        <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;