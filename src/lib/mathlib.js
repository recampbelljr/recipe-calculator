import React, { useState } from 'react';

//recipe is and object with the default recipe with the serving size
export const calculateSingleServing = (recipe) => {
  let singleServing = {};

  for (let ingredient in recipe) {
    if (typeof(recipe[ingredient]) === 'object') {
      let oldQuantity = recipe[ingredient].number;
      singleServing[ingredient] = {
        number: (oldQuantity / recipe.minServing),
        measurment: recipe[ingredient].measurment,
      }
    }
  }
  singleServing['minServing'] = recipe.minServing;
  singleServing['desiredServing'] = recipe.desiredServing;

  return singleServing;
}

export const calculateDesiredRecipe = (singleServing) => {
  let desiredRecipe = {};

  for (let ingredient in singleServing) {
    if (typeof(singleServing[ingredient]) === 'object') {
      let oldQuantity = singleServing[ingredient].number;
      desiredRecipe[ingredient] = {
        number: (oldQuantity * singleServing.desiredServing),
        measurment: singleServing[ingredient].measurment,
      }
    }
  }
  desiredRecipe['minServing'] = singleServing.minServing;
  desiredRecipe['desiredServing'] = singleServing.desiredServing;

  return desiredRecipe;
}