import { useState } from "react";
import "./App.css";
import Waitlist from "../Waitlist/Waitlist";
import ContactUs from "../ContactUs/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Waitlist />
      <ContactUs />
    </div>
  );
}

export default App;
