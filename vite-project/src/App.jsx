import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import React, { useState } from "react"
function App() {
  const [activeComponent, setActiveComponent] = useState("about");
  return (
    <>
    <Navbar activeComponent={activeComponent}
    setActiveComponent={setActiveComponent}
    />
    <h1> Heloooo</h1>
    </>
  )
}

export default App
