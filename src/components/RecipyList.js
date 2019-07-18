import React from "react";

const RecipyList = props => {
  //  console.log(props.recipes);
  const recipes = props.recipes.map((recipe, index) => (
    <div className="single__recipy" key={index}>
      <div>
        <img alt="img" src={recipe.thumbnail} />
      </div>
      <div className="recipy__info">
        <h1>{recipe.title}</h1>
        <p>{recipe.ingredients}</p>
        <a className="primary__button" href={recipe.href}>
          oryginal recipe
        </a>
      </div>
    </div>
  ));
  return <div>{recipes}</div>;
};

export default RecipyList;
