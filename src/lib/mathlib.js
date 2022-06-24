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

export const calculateFraction = (number) => {

  let decimal = number % 1;
  let wholeNum = number - decimal;

  if (number < 1 && number >=0.875) {
    if (wholeNum > 0) {
      wholeNum += ' 7/8';
    } else {
      wholeNum = '7/8'
    }
  } else if (number > 0.875 && number >=0.75) {
    if (wholeNum > 0) {
      wholeNum += ' 3/4';
    } else {
      wholeNum = '3/4';
    }
  } else if (number < 0.75 && number >=0.666) {
    if (wholeNum > 0) {
      wholeNum += ' 2/3';
    } else {
      wholeNum = '2/3';
    }
  } else if (number < 0.666 && number >=0.625) {
    if (wholeNum > 0) {
      wholeNum += ' 5/8';
    } else {
      wholeNum = '5/8';
    }
  } else if (number < 0.625 && number >=0.5) {
    if (wholeNum > 0) {
      wholeNum += ' 1/2';
    } else {
      wholeNum = '1/2';
    }
  } else if (number < 0.5 && number >= 0.375) {
    if (wholeNum > 0) {
      wholeNum += ' 3/8';
    } else {
      wholeNum = '3/8';
    }
  } else if (number < 0.375 && number >=0.333) {
    if (wholeNum > 0) {
      wholeNum += ' 1/3'
    } else {
      wholeNum = '1/3'
    }
  } else if (number < 0.333 && number >= 0.25) {
    if (wholeNum > 0) {
      wholeNum += ' 1/4';
    } else {
      wholeNum = '1/4';
    }
  } else if (number < 0.25 && number >= 0.125) {
    if (wholeNum > 0) {
      wholeNum += ' 1/8';
    } else {
      wholeNum = '1/8';
    }
  } else if (number < 0.125) {
    wholeNum = 'a pinch of ';
  }

  return wholeNum;

}