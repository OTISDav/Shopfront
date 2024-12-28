import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <button>Ajouter au panier</button>
    </div>
  );
};

export default ProductCard;
