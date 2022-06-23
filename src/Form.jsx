import React, { useState, useContext, createContext } from 'react';
import { getRecipe } from './lib/clickEvents.js';

let Form = () => {

  let [recipe, setRecipe] = useState({});


  return (
    <>
      <textarea id="recipeBox" className="recipeBox" placeholder="Copy and paste recipe here" />
      <div className="serving">
        Servings: <input id="minServing" type="number" placeholder="Minimum Number of Servings" />
      </div>
      <div>
        <button type="submit" onClick={()=> {setRecipe(getRecipe())}}>Submit</button>
        <button type="submit" onClick={() => {console.log(recipe)}}>Check</button>
      </div>
    </>
  )
}

export default Form = Form;