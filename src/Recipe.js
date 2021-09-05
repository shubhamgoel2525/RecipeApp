import React from "react";

import style from "./recipe.module.css";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.heading}>{title}</h1>

      <ol>
        {ingredients.map((ingredient, index) => {
          return (
            <li key={index} className={style.listItems}>
              {ingredient.text}
            </li>
          );
        })}
      </ol>

      <img src={image} className={style.image} alt="food" />
    </div>
  );
};

export default Recipe;
