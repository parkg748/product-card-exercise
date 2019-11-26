import React from 'react';
import './CategoryFilters.css';

const CategoryFilters = ({ onChange }) => (
  <div className="CategoryFilters-row">
    <select name='currentCategory' onChange={onChange}>
      <option value="All Categories">All Categories</option>
      <option value="Bakery">Bakery</option>
      <option value="Bars">Bars</option>
      <option value="Beverages">Beverages</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Canned/Pickled Foods">Canned/Pickled Foods</option>
      <option value="Dried Fruit & Nuts">Dried Fruit & Nuts</option>
      <option value="Dried Pantry Staples">Dried Pantry Staples</option>
      <option value="Fruit">Fruit</option>
      <option value="Non-Produce">Non-Produce</option>
      <option value="Oils, Condiments, Spices and Spreads">Oils, Condiments, Spices and Spreads</option>
      <option value="Prepared Foods & Kits">Prepared Foods & Kits</option>
      <option value="Produce">Produce</option>
      <option value="Salty Snacks">Salty Snacks</option>
      <option value="Soups/Stocks">Soups/Stocks</option>
      <option value="Sweet Snacks">Sweet Snacks</option>
      <option value="Vegetables">Vegetables</option>
    </select>
  </div>
);

export default CategoryFilters;
