import { useState } from 'react';
import 'App.css';

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addItem = function() {
    setList([...list, text]);
  };

  const delItem = function() {
    setList([...list, text]);
  };

  const textChanged = function(event) {
    setText(event.target.value);
  };

  const itemList = list.map(item => {
    return <li>{item}</li>;
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