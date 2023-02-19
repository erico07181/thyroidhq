import { useState } from "react";
import "./App.css";
import Waitlist from "../Waitlist/Waitlist";
import ContactUs from "../ContactUs/ContactUs";
import Nav from "../Navbar/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Waitlist />
      <ContactUs />
    </div>
  );
}
