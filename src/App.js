import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState(0)

  const oncleckHandler = (e) => {
    if(e.target.id ===    "inc") {
      setInput((prev) => prev+1)
    }
    else {
      setInput((prev) => prev-1)
    }

  }
  return (
    <div >
      <h1>Counter App</h1>
      <div>
        <p>Count: {input}</p>
        <button type="button" id="inc" onClick={oncleckHandler}>
        Increment
      </button>
      <button type="button" id="dec" onClick={oncleckHandler}>
        Decrement
      </button>
      </div>
      
    </div>
  );
}

export default App;
