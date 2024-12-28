import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/api';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <div>
      <h1>Catégories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
