import React, {useState} from "react";
import Form from './Form.jsx';
import NewRecipe from './NewRecipe.jsx';
import { getRecipe } from './lib/clickEvents.js';

let App = () => {

  let [recipe, setRecipe] = useState({});

  return (
    <>
      <div className="container">
        <Form />
        <div className="line3">
          <div className="newServingSizeText">Desired # of Servings: </div>
          <input className="newServingSize" id="newServingSize" type="number" />
          <div className="arrow">=></div>
          <button className="button" type="submit" onClick={()=> {setRecipe(getRecipe())}}>Submit</button>
        </div>
        <NewRecipe />
      </div>
    </>
  );
}

export default App;
