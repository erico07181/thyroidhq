import "./App.css";

import LandingPage from "../LandingPage/LandingPage.jsx";
import { createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    fonts: {
      euclid: "Euclid Circular B",
    },
  },
});

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
