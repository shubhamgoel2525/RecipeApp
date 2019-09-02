import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
  return(
  <div className={style.recipe}>
      <h1 className={style.heading}>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li className={style.listItems}>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} className={style.image} />
    </div>
  );
}

export default Recipe;
