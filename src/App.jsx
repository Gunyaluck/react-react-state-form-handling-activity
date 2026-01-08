import { useState } from "react";
import "./App.css";

function App() {
  //มี 2 event คือ input และ button ใช้ useState 2 ตัวเพื่อจัดการข้อมูล
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  function handleAdd() {
    setDisplayValue(inputValue);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">
      <h1>Simple Greeting Message App 2</h1>
      <div className="greeting-container">
        <h2>{displayValue}</h2>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        {/*หรือใช้ onChange = {(e) => setInputValue(e.target.value)}*/}
        <div className="buttons">
          <button onClick={handleAdd}>Add</button>
          {/*หรือใช้ onClick = {() => setDisplayValue(inputValue)}*/}
        </div>
      </div>
    </div>
  );
}

export default App;
