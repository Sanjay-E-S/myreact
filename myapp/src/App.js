import logo from './logo.svg';
import './App.css';
// import Navbar from './Navbar';
// import Bodysec from './Bodysec';
import Bdaycard from './Bdaycard';

function App() {
  const title = 'hi react';
  const likes = 30;
  return (
    <div className="App">
      <div className='content'>
        {/* <Navbar />
        <Bodysec /> */}
        <Bdaycard />
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
