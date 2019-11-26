import React from 'react';
import './Favorites.css';
import Product from './Product';
import { Context } from './App';

const Favorites = () => {
  return (
    <Context.Consumer>
      {({ favorites, products }) => (
        <div className="Favorites">
          <h1>Favorites</h1>
          {products.map(product => {
            if (favorites.indexOf(product.productId) !== -1) {
              return <Product key={product.variantId} product={product} />
            }
          })}
        </div>
      )}
    </Context.Consumer>
  );
};

export default Favorites;
