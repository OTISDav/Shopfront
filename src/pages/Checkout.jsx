import React, { useState } from 'react';
import { createOrder } from '../services/api';

const Checkout = () => {
  const [formData, setFormData] = useState({
    items: '',
    total: '',
    nom: '',
    email: '',
    address: '',
    ville: '',
    pays: '',
    zipcode: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createOrder(formData);
    alert('Commande créée avec succès !');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Finaliser la commande</h1>
      <input name="items" placeholder="Articles" onChange={handleChange} />
      <input name="total" placeholder="Total (€)" onChange={handleChange} />
      <input name="nom" placeholder="Nom" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="address" placeholder="Adresse" onChange={handleChange} />
      <input name="ville" placeholder="Ville" onChange={handleChange} />
      <input name="pays" placeholder="Pays" onChange={handleChange} />
      <input name="zipcode" placeholder="Code postal" onChange={handleChange} />
      <button type="submit">Passer commande</button>
    </form>
  );
};

export default Checkout;
