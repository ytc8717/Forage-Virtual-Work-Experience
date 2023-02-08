import './App.css';

function Banner({title}) {
  return (
    <h1>{title}</h1>
  );
}

function Exhibit({heading, child}) {
  return (
    <>
      <h2>{heading}</h2>
      <child/>
    </>
  );
}

function children() {
  return (
    <></>
  );
}

function App() {
  return (
    <>
      <div className="App">
        <Banner title="Sextant"/>
        <Exhibit heading="tmp heading" child={<children/>} />
      </div>
    </>
  );
}

export default App;
