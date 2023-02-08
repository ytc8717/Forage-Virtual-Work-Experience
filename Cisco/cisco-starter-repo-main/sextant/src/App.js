import React from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import AddressDisplay from './AddressDisplay';
import LatencyDisplay from './LatencyDisplay';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant"/>
      <Exhibit name="Public IPv4 Address">
        <AddressDisplay url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Public IPv6 Address">
        <AddressDisplay url='https://api64.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Latency">
        <LatencyDisplay url='ws://localhost:55455'/>
      </Exhibit>
    </div>
  );
}

export default App;
