import { useEffect } from 'react'

import logo from './logo.svg';
import './App.css';
import axios from "./utilities/axios"
 

function App() {
  useEffect(() => {
    alert('GGGD')
    const fetchVideos = async() => {
      try {
        const response = await axios.get('/videos')
        console.log(response.data)
      } catch (err) {
        // Not in the 200 response range
        alert("failed!!")
      }
    }
    fetchVideos()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <h1>Lulu Code</h1>
    </div>
  );
}

export default App;
