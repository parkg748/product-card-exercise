import React from 'react';
import './App.css';
import Products from './Products';
import products from './products.json';
import CategoryFilters from './CategoryFilters';
import TagFilters from './TagFilters';
import Favorites from './Favorites';
export const Context = React.createContext();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    }
    this.onChange = this.onChange.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addFavorite(e) {
    this.setState({ favorites: this.state.favorites.concat(e.target.getAttribute('name')) });
  }

  removeFavorite(e) {
    this.setState({ favorites: this.state.favorites.filter(favorite => favorite !== e.target.getAttribute('name')) });
  }

  render() {
    return (
      <div className="App">
        <div className="App-row">
          <label>Category: <CategoryFilters onChange={this.onChange}/></label>
          <label>Tag: <TagFilters onChange={this.onChange}/></label>
        </div>
        <div className="App-row">
          <Context.Provider value={{
              favorites: this.state.favorites,
              products,
              addFavorite: this.addFavorite,
              removeFavorite: this.removeFavorite
          }}>
            <Products currentCategory={this.state.currentCategory} currentTag={this.state.currentTag}/>
            <Favorites />
          </Context.Provider>
        </div>
      </div>

    )
  }
};

export default App;
