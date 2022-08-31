import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({props}) {
    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        //newFood is what is entered in the form, assigning the key to the value. Passing props the new food. Props is argument that addFoodForm is using.
        const newFood = { name: name, image: image, calories: calories, servings: servings };
        props(newFood)
        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
       
    }

  


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesInput}/>

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;