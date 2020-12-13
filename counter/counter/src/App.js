import './App.css';
// importing react useState from react in order to use our state
import React, {useState} from 'react';
function App() {
  // setting our useState to a initial value of zero
  const [counter, setCounter]  = useState(0)
  return (

    // using className name and giving a name of app to style the react component
    <div className="App">
    {/* each time the user click the button it increment by 1      */}
    <button onClick ={()=>setCounter(counter + 1)}> Click to increment</button>

   <h2 className="counter"> {counter} </h2>
   {/* each time the user click the button it decrement by 1      */}
   <button onClick ={()=>setCounter(
     counter - 1)}> Click to decrement</button>

     <button onClick = {() =>setCounter(0)}>Click to clear </button>
    </div>
  );
}

export default App;
