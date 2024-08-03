import React from "react";
import NavBar from "./NavBar"; // Use relative path if in the same directory
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
