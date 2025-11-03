import React from 'react';

export function RecipeList({ recipes, onDelete }) {
  return (
    <div>
      {recipes.length === 0 && <p>No recipes yet.</p>}
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h3>{recipe.name}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
          <button onClick={() => onDelete(index)} className="delete-btn">Delete</button>
        </div>
      ))}
    </div>
  );
}

