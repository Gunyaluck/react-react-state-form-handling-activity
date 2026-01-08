import { useState } from "react"; 
import "./App.css";

function App() {
const [email, setEmail] = useState(""); //เก็บค่า
const [displayEmail, setDisplayEmail] = useState(""); //เก็บผลลัพธ์
const [isError, setIsError] = useState(false); //เก็บค่าข้อผิดพลาด

function handleValidate(e) {
  e.preventDefault();
  
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //ตรวจสอบรูปแบบอีเมล


  if (emailPattern.test(email)) {
    setDisplayEmail(`✅ ${email}`); //ถ้าเป็นจริงจะแสดงผลลัพธ์ว่า email ถูกต้อง
    setIsError(false); //ถ้าเป็นจริงจะ setIsError เป็น false (ไม่มี error)
  } else {
    setDisplayEmail("❌ Wrong Pattern");
    setIsError(true); //ถ้าไม่เป็นจริงจะ setIsError เป็น true (มี error)
  }
}

  return (
    <div className="App">
      <h1>Email Validation App</h1>
      <form className="email-container">
        <h2 style={{ color: isError ? "red" : "green" }}>{displayEmail}</h2>
        {/* {isError ? <h2 style={{ color: "red" }}>{displayEmail}</h2> : <h2 style={{ color: "green" }}>{displayEmail}</h2>} */}
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="buttons">
          <button type="submit" onClick={handleValidate}>Validate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
