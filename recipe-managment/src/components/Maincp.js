
import React, { useState } from 'react';

function RecipeForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a recipe object with form data
    const recipe = {
      title,
      description,
      ingredients: ingredients.split('\n'),
      instructions: instructions.split('\n'),
      image,
    };

    onSubmit(recipe);
    
    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
    setImage(null);
  };

  return (
    <div>
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={handleDescriptionChange} required />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea value={ingredients} onChange={handleIngredientsChange} required />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea value={instructions} onChange={handleInstructionsChange} required />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default RecipeForm;