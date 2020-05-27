import React, { useState } from 'react';
import RotationList from './RotationList';
import TriageHistory from './TriageHistory';
import Hotseat from './Hotseat';
import './app.css';

const App = () => {
  const rotation = [
    {name: 'Jeremy'},
    {name: 'Toledo'},
    {name: 'Jonathon'},
    {name: 'Kofink'},
    {name: 'jomitsch'},
  ];
  const [currentTriager, setCurrentTriager] = useState(0);
  const [tHistory, setTHistory] = useState([]);
  const advanceRotation = () => {
    logToHistory(currentTriager);
    const newIdx = (currentTriager + 1) % rotation.length;
    setCurrentTriager(newIdx);
    return;
  }
  const setTriagerByName = (name) => {
    if (!name) return;
    let rHer = rotation.findIndex(person => person.name === name);
    if (rHer === -1) rHer = 0;
    setCurrentTriager(rHer);
  }
  const logToHistory = (idx) => {
    setTHistory(prev => [rotation[idx], ...prev]);
  }
  console.log({currentTriager, tHistory})

  return (
    <div className="app-container">
      <Hotseat redHatter={rotation[currentTriager]} advanceRotation={advanceRotation}/>
      <br />
      <TriageHistory redHatters={tHistory} setTriagerByName={setTriagerByName}/>
      <br />
      <RotationList redHatters={rotation} />
    </div>
  );
}

export default App;
