import React from "react";
import Header from './components/Header/Header';
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";

function App() {

  return (
    <>
      <Header title='La comisión más picante' numero={61} activa={true}/>
      <Section/>
      <Footer/>
      <Counter/>
    </>
  )
}

export default App;
