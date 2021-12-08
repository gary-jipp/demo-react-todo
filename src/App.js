import { useState } from 'react';
import 'App.css';
import Header from 'components/Header';
import Counter from 'components/Counter';

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const addItem = function() {
    // We could do it this way
    // const newList = list.slice(); // COPY
    // newList.push(text);
    // setList(newList);

    // This is better
    // const newList = [...list];
    // setList(newList);

    // This is the best way
    setList([...list, text]);

    // Add Item to the beginning
    // setList([text, ...list]);
  };

  // Not the best Delete function
  const deleteItem = function(event) {
    console.log(event.target);

    // Remove using pop
    // const newList = [...list];
    // newList.pop();
    // setList(newList);

    // Remove the last item - same as a pop
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

      <Header text="My ToDo List" />
      <Counter start={0} />
      <input value={text} onChange={textChanged} />
      <br />
      <button onClick={addItem}>Add Item</button>

      <ul>{itemList}</ul>
    </div>
  );
}