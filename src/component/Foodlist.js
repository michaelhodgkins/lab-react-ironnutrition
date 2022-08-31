import { Divider, Button } from 'antd';
import foods from '../foods.json';
import { useState } from "react";
import FoodBox from '../component/Foodbox';
import AddFoodForm from './AddFoodForm';


function Foodlist() {
  const [ food, setFood ] = useState(foods)//initial array with a state 
  const [ copyFood , setCopyFood ] = useState(food)//copy of the inital array, using states

const addFood = (foodForm) => { //addFood, passing the form as it's argument

  const copyFood = [foodForm, ...food]//copyFood is now the form form plus it's array
  setFood(copyFood); //updating the state using the argument copyFood
  setCopyFood(copyFood)//updating the state using the argument copyFood
}

  return (
    <div className="App">
      <AddFoodForm props={addFood}/>
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>
        {copyFood.map(foodCard => 
        <FoodBox food={foodCard} />
          
          )}
</div>
)}

export default Foodlist;