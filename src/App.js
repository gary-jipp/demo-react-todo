import { useState } from 'react';
import Header from 'components/Header';
import 'App.css';

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addItem = function() {
  };

  const textChanged = function(event) {
    setText(event.target.value);
  };

  const itemList = list.map((item, i) => {
    return <li key={i}>{item}</li>;
  });

  return (
    <div className="App">
      <Header text="My ToDo List" />
      
      <input value={text} onChange={textChanged} />
      <br />
      <button onClick={addItem}>Add Item</button>

      <ul>{itemList}</ul>
    </div>
  );
}