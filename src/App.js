import React from "react";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Store from "./components/Store/Store";
import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Store />
    </>
  );
};

export default App;
