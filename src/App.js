import React from 'react';
import './App.css';
import AboutMe from './Components/AboutMe.js';
import Header from './Components/Header.js'
import ImageSection from './Components/ImageSection.js';
import IngredientList from './Components/IngredientList.js';
import Recipe from './Components/Recipe.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSection />
      <Recipe />
      <IngredientList />
      <hr />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
