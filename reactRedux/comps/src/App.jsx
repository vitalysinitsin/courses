import React, { useState } from "react";
import "./index.css";
import Dropdown from "./components/Dropdown";

function App() {
  const [value, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <a href="/dashboard">dashboard</a>
      <Dropdown options={options} value={value} onChange={handleSelect} />
    </div>
  );
}

export default App;
