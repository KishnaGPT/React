import React, { useState } from 'react';

export function RecipeForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.ingredients || !form.instructions) {
      alert('Please fill in all fields.');
      return;
    }

    onAdd(form);
    setForm({ name: '', ingredients: '', instructions: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="name"
        placeholder="Recipe Name"
        value={form.name}
        onChange={handleChange}
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients"
        value={form.ingredients}
        onChange={handleChange}
      />
      <textarea
        name="instructions"
        placeholder="Instructions"
        value={form.instructions}
        onChange={handleChange}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

