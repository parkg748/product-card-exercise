import React from 'react';
import './Product.css';
import { Context } from './App';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {}
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { product } = this.props;
    const toImageUrl = (product) =>
      `//res.cloudinary.com/imperfect/image/upload/w_400,h_260,c_pad,b_auto,d_products:no-image-found.png/${product.imageFilename}`;

    return (
      <Context.Consumer>
        {({ addFavorite, favorites, removeFavorite }) => (
          <div className="Product-card">
            <div>
              <img
                src={toImageUrl(product)}
                alt={product.name}
              />
            </div>
            <i name={product.productId}
               onClick={(favorites && favorites.indexOf(product.productId) !== -1) ? removeFavorite : addFavorite}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}
               className={`${(this.state.hover || (favorites && favorites.indexOf(product.productId) !== -1)) ? 'fas' : 'far'} fa-heart`}
            ></i>
            <div>
              {product.name}
            </div>
            <div>
              ${product.price} | {product.packageUnitAmount} {product.packageUnitFormatted}
            </div>
          </div>
        )}
      </Context.Consumer>

    )
  }
};

export default Product;
