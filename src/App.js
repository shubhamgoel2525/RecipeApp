import React, { useEffect, useState, useCallback } from "react";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";

import Recipe from "./Recipe";

const APP_ID = "57c114fd";
const APP_KEY = "434ac95d08894c11aa0a21380b212617";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("mix");

  const getRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  }, [query]);

  useEffect(() => {
    getRecipes();
  }, [query, getRecipes]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Search for a recipe . . . "
          onChange={updateSearch}
        />

        <button className="search-button" type="submit">
          <span className="fa fa-search"></span>&nbsp; Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
