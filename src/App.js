import { Row, Divider, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import { useState } from "react";
console.log(foods);

function App() {
  const [ food, setFood ] = useState(foods)
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map(food =>
        <div>
          <p>{food.name}</p>
          <img src={food.image} alt='' width='100px' />
        </div>
          
          )}
      </Row>
    </div>
  );
}

export default App;


