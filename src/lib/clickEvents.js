import React, { useState, createContext, useContext } from 'react';
import { processRecipe } from './dataProcessing.js';


export const getRecipe = () => {
  let recipe = document.getElementById('recipeBox').value;
  let minServing = parseInt(document.getElementById('minServing').value);
  // Splitting the recipe into an array by using a new line as a deliniator
  recipe = recipe.split(/\r?\n/);
  let processedRecipe = processRecipe(recipe);

  processedRecipe['minServing'] = minServing;

  return processedRecipe;

}