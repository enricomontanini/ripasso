import './App.css';
import { useState } from 'react';

function App() {
  const [conteggio, setConteggio] = useState(0)
  

   
  return (
    <div className="App">
     <p> Il valore è {conteggio}</p>

     <button onClick={() => setConteggio(conteggio +1)}>+</button>

     <button onClick={() => setConteggio(conteggio -1)}>-</button>

     

    </div>
  );
  }

export default App;
