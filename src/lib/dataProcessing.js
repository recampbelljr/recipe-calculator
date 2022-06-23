import React from 'react';

// fraction is an array with the numerator at 0 and denominator at 1
export const processFraction = (fraction) => {
  let numerator = parseInt(fraction[0]);
  let denominator = parseInt(fraction[1]);
  let decimal = numerator / denominator;

  return parseFloat(decimal.toFixed(3));
}

export const processNumber = (ingredient) => {

  let letterFound = false;
  let index = 2;

  while (!letterFound && index < ingredient.length) {
    let element = ingredient.charCodeAt(index);

    if (element >= 65 && element <= 90 || element >= 97 && element <= 122) {
      letterFound = true;
    }

    if (!letterFound){
      index += 1;
    }
  }

  let number = ingredient.slice(0, index - 1);
  return number;
}

export const getMeasurmnetIndex = (ingredient, index) => {
  let measurmentFound = false;
  let measurmentList = {
    cup: true,
    cups: true,
    teaspoon: true,
    teaspoons: true,
    tsp: true,
    tsps: true,
    tablespoon: true,
    tablespoons: true,
    tbsp: true,
    tbsps: true
  }

  while (!measurmentFound && index < ingredient.length)  {
    let lowercaseIngredient = ingredient[index].toLowerCase();

    if (measurmentList[lowercaseIngredient]) {
      measurmentFound = true;
    }

    if (!measurmentFound) {
      index += 1;
    }
  }

  if (measurmentFound) {
    return index;
  } else {
    return -1;
  }
}

export const processMeasurment = (ingredient) => {

  let ingredientSplit = ingredient.split(' ');
  let index = 1;
  let measurmentIndex = getMeasurmnetIndex(ingredientSplit, index);
  let measurment = (measurmentIndex === -1) ? null : ingredientSplit[measurmentIndex];

  return measurment;
}

export const processIngredient = (ingredient) => {
  let ingredientSplit = ingredient.split(' ');
  let measurmentIndex = getMeasurmnetIndex(ingredientSplit, 1);
  let currentIngredient = (measurmentIndex === -1) ? ingredientSplit.slice(1).join(' ') : ingredientSplit.slice(measurmentIndex + 1).join(' ');
  return currentIngredient;
}

export const convertStringToNum = (stringNum) => {

  let fractionIndex = stringNum.indexOf('/');
  let number = (fractionIndex > 1 || fractionIndex === -1) ? parseInt(stringNum[0]) : 0;

  if (fractionIndex > -1) {
    number += processFraction([stringNum[fractionIndex - 1], stringNum[fractionIndex + 1]]);
  }

  return number;
}

// recipe is an array with each element being a number + measurment + ingredient
export const processRecipe = (recipe) => {
  let recipeObj = {};
  let number = 0;
  let measurment = '';
  let ingredient = '';

  recipe.forEach((line) => {
    number = processNumber(line);
    measurment = processMeasurment(line);
    ingredient = processIngredient(line);

    number = convertStringToNum(number);

    recipeObj[ingredient] = {
      number: number,
      measurment: measurment
    }
  })

  return recipeObj;
}