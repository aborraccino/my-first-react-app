import { useState } from "react";

export default function Home() {

  function ListItem({ints}) {
    
    return (
      <>
        {
          ints.map(id => {
            return <li key={id}>{id}</li>
          })
        }
      </>
    )
  }

  function ListItemWithState({ints}) {
    const increment = 3;
    return (
      <>
        <button onClick={() => addValue(increment) }>Add Item</button>
        {
          ints.map(id => {
            return <li key={id}>{id}</li>
          })
        }
      </>
    )
  }

  const ints = [1, 2, 3, 4];
  
  const [ints2, setInts] = useState([1, 2, 3]);
  function addValue(incrementValue){
    const newVal = Math.max(...ints2) + incrementValue;
    setInts([...ints2, newVal]);
  }

  return (
    <div id="container">
      <span>
        List Items - static external params - no state
        <ul>
          <ListItem ints={ints}/>
        </ul>
      </span>
      
      <span>
        List Items - useState
        <ul>
          <ListItemWithState ints={ints2} addValue={addValue}/>
        </ul>
      </span>
    </div>
  )
}
