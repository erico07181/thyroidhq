import { useState } from "react";
import "./App.css";
import Waitlist from "../Waitlist/Waitlist";
import ContactUs from "../ContactUs/ContactUs";
import Nav from "../Navbar/Nav";
import MissionStatement from "../MissionStatement/MissionStatement";
import Vision from "../Vision/Vision";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <MissionStatement />
      <Vision />
      <Waitlist />
      <ContactUs />
    </div>
  );
}
