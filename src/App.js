import { useState } from 'react';
import 'App.css';

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addItem = function() {
    // const newList = [...list];
    // newList.push(text);
    // setList(newList);

    // Add Item to the end
    setList([...list, text]);

    // Add Item to the beginning
    setList([text, ...list]);
  };

  // Not the best Delete function
  const deleteItem = function() {
    // const newList = [...list];
    // newList.pop();
    // setList(newList);

    // Remove tjhe last item - same as a pop
    setList([...list].slice(0, -1));
  };

  const textChanged = function(event) {
    setText(event.target.value);
  };

  const itemList = list.map((item, i) => {
    return <li key={i} onClick={deleteItem} >{item}</li>;
  });

  return (
    <div className="App">
      <h1>My ToDo List</h1>

      <input value={text} onChange={textChanged} />
      <br />
      <button onClick={addItem}>Add Item</button>

      <ul>{itemList}</ul>
    </div>
  );
}