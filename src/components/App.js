import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <p>MY NAME IS ADAM AND THIS IS ABOUT ME BABY!!!</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
