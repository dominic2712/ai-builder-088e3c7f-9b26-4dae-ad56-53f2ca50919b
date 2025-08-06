import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

interface Item {
  id: number;
  name: string;
}

const HomePage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('/api/items')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-4">
        <h2 className="text-2xl font-bold mb-4">Items</h2>
        <ul>
          {items.map(item => (
            <li key={item.id} className="mb-2">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;