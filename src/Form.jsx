import React, { useState, useContext, createContext } from 'react';
import { getRecipe } from './lib/clickEvents.js';

let Form = () => {


  return (
    <>
      <textarea id="recipeBox" className="recipeBox" placeholder="Copy and paste recipe here" />
      <div>
        <button type="submit" onClick={()=> {getRecipe()}}>Submit</button>
      </div>
    </>
  )
}

export default Form = Form;