import React, { useState } from "react";
import './App.css'
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handelChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItems() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container ">
      <div className="row">
        <div
          className="col-lg-3 ">
          <div className="card-body allcards">
            <div className="card">
              <div className="heading">
                <h1>Todo list</h1>
              </div>
              <div>
                <div className="form">
                  <input
                    type="text"
                    onChange={handelChange}
                    value={inputText}
                  />
                  <button onClick={addItems}>
                    <span>Add</span>
                  </button>
                </div>
                <div>
                  <ul>
                    {items.map((todoItems, i) => (
                      <li key={i}>{todoItems}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
