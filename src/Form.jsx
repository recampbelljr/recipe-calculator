import React, { useState, useContext, createContext } from 'react';
import { getRecipe } from './lib/clickEvents.js';

let Form = () => {


  return (
    <><div className="origRecipe">
        <textarea id="recipeBox" className="box" placeholder="Copy and paste recipe here" />
      </div>
      <div className="serving">
        Servings: <input id="minServing" type="number" placeholder="Minimum # of Servings" />
      </div>
    </>
  )
}

export default Form = Form;