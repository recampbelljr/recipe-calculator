import React, { useState, createContext, useContext } from 'react';
import { processRecipe } from './dataProcessing.js';


export const getRecipe = () => {
  let recipe = document.getElementById('recipeBox').value;
  // Splitting the recipe into an array by using a new line as a deliniator
  recipe = recipe.split(/\r?\n/);
  processRecipe(recipe);

}