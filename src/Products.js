import React from 'react';
import Product from './Product';
import './Products.css';
import { Context } from './App';

const Products = ({ currentCategory, currentTag }) => {
  return (
    <Context.Consumer>
      {({ products }) => (
        <div className="Products-grid">
          {products.map(product => {
            if ((product.categories.find(category => category.name === currentCategory) || !currentCategory || currentCategory === 'All Categories') &&
                (product.tags.find(tag => tag.name === currentTag) || !currentTag || currentTag === 'All Tags')) {
              return <Product key={product.variantId} product={product} />
            }
          })}
        </div>
      )}
    </Context.Consumer>
  );
};

export default Products;
