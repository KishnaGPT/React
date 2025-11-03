import React, { useState } from 'react';
import { RecipeList } from './RecipeList';
import { RecipeForm } from './RecipeForm';
import './style.css';

export function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const deleteRecipe = (index) => {
    const updated = recipes.filter((_, i) => i !== index);
    setRecipes(updated);
  };

  return (
    <div className="container">
      <h2>📖 Recipe Book</h2>
      <RecipeForm onAdd={addRecipe} />
      <RecipeList recipes={recipes} onDelete={deleteRecipe} />
    </div>
  );
}

