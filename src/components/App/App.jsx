import "./App.css";

import LandingPage from "../LandingPage/LandingPage";
import { createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    fonts: {
      euclid: "Euclid Circular B",
    },
  },
});

export default function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}
