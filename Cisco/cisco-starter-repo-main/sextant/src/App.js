import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant"/>
      <Exhibit name="ex1"/>
      <Exhibit name="ex2"/>
      <Exhibit name="ex2"/>
    </div>
  );
}

export default App;
