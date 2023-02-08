import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import FetchIP from './FetchIP';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant"/>
      <Exhibit name="ex1" children={() => FetchIP('ipv4')}/>
      <Exhibit name="ex2"/>
      <Exhibit name="ex2"/>
    </div>
  );
}

export default App;
