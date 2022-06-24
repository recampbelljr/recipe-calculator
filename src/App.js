import React, {useState} from "react";
import Form from './Form.jsx';
import NewRecipe from './NewRecipe.jsx';
import { getRecipe } from './lib/clickEvents.js';

let App = () => {

  let [recipe, setRecipe] = useState({});

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">Robert's Recipe Calculator</div>
        </div>
        <Form />
        <div className="line3">
          <div className="newServingSizeText">Desired # of Servings: </div>
          <input className="newServingSize" id="newServingSize" type="number" />
          <div className="arrow">=></div>
          <div className="button"> <button type="submit" onClick={()=> {setRecipe(getRecipe())}}>Submit</button></div>
        </div>
        <NewRecipe />
      </div>
    </>
  );
}

export default App;
