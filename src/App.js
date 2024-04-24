import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState(0)
  return (
    <div >
      <h1>Counter App</h1>
      <div>
        <p>Counter: {input}</p>
        <button onClick={(e) =>{
            setInput(input+1)
        }}>Increment</button>

        <button onClick={e =>{
          setInput(input-1)
        }}>Decrement</button>
      </div>
      
    </div>
  );
}

export default App;
