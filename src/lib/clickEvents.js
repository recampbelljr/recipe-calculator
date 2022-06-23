import React, { useState, createContext, useContext } from 'react';
import { processRecipe } from './dataProcessing.js';
import { calculateSingleServing, calculateDesiredRecipe } from './mathlib.js';


export const getRecipe = () => {
  let recipe = document.getElementById('recipeBox').value;
  let minServing = parseInt(document.getElementById('minServing').value);
  let desiredServing = parseInt(document.getElementById('newServingSize').value);
  let recipeString = ``;
  // Splitting the recipe into an array by using a new line as a deliniator
  recipe = recipe.split(/\r?\n/);

  let processedRecipe = processRecipe(recipe);

  processedRecipe['minServing'] = minServing;
  processedRecipe['desiredServing'] = desiredServing;

  let singleServing = calculateSingleServing(processedRecipe);

  let desiredRecipe = calculateDesiredRecipe(singleServing);

  let objectKeys = Object.keys(desiredRecipe);
  let objLastIndex = objectKeys.length - 1;
  let index = 0;

  for (let ingredient in desiredRecipe) {
    let element = desiredRecipe[ingredient];
    let typeOfElement = typeof(desiredRecipe[ingredient]);

    if (typeOfElement === 'object') {
      let measurment = (element.measurment === null) ? '' : element.measurment;
      recipeString += `${element.number} ${measurment} ${ingredient}`

      if (index !== objLastIndex) {
        recipeString += '\n';
      }
    }

    index += 1;
  }

  document.getElementById('newRecipeBox').innerHTML = recipeString;

  return desiredRecipe;

}