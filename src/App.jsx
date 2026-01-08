import { useState } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");

  const handleGreeting = (greeting) => {
    setGreeting(greeting);
  };

  // //อีกวิธีหนึ่ง
  // function handleClickThaiGreeting () {
  //   setGreeting("สวัสดี");
  // }

  // function handleClickEnglishGreeting () {
  //   setGreeting("Hi");
  // }

  return (
    <div className="App">
      <h1>Simple Greeting Message App</h1>
      <div className="greeting-container">
        <h2>{greeting}</h2>
        <div className="buttons">
          <button onClick={() => handleGreeting("Hi")}>Hi</button>
          <button onClick={() => handleGreeting("สวัสดี")}>สวัสดี</button>
          {/* <button onClick={handleClickThaiGreeting}>สวัสดี</button>
          <button onClick={handleClickEnglishGreeting}>Hi</button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
