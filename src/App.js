import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [text, setText] = useState(localStorage.getItem("note") || "");

  useEffect(() => {
    localStorage.setItem("note", text);
  }, [text]);

  const handleSave = () => localStorage.setItem("note", text);
  const handleClear = () => setText("");

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea 
            className="textarea is-large" 
            placeholder="Notes..." 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        <button 
        className="button is-large is-primary is-active" 
        onClick={handleSave}>
          Save</button>
        <button 
        className="button is-large" 
        onClick={handleClear}>
          Clear</button>
      </div>
    </div>
  );
}

export default App;