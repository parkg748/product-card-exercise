import React from 'react';
import './TagFilters.css';

const TagFilters = ({ onChange }) => (
  <div className="TagFilters-row">
    <select name='currentTag' onChange={onChange}>
      <option value="All Tags">All Tags</option>
      <option value="Conventional">Conventional</option>
      <option value="Cooking Vegetables">Cooking Vegetables</option>
      <option value="Organic">Organic</option>
      <option value="Salad Ingredients">Salad Ingredients</option>
      <option value="Vegetarian">Vegetarian</option>
      <option value="Gluten-Free">Gluten-Free</option>
      <option value="Non-GMO">Non-GMO</option>
      <option value="DIY Healthy Meals">DIY Healthy Meals</option>
    </select>
  </div>
);

export default TagFilters;
