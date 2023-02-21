import { useState } from "react";
import "./App.css";
import Waitlist from "../Waitlist/Waitlist";
import ContactUs from "../ContactUs/ContactUs";
import Nav from "../Navbar/Nav";
import MissionStatement from "../MissionStatement/MissionStatement";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <MissionStatement />
      <Waitlist />
      <ContactUs />
    </div>
  );
}
