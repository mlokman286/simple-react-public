import './App.css';
import playerData from './players.json'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Players from './components/Players/Players';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() =>{
    setPlayers(playerData)
  },[])
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Players players={players}></Players>
    </div>
  );
}

export default App;
